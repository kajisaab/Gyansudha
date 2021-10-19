import React, { useState } from "react";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import styled from "styled-components";
import * as yup from "yup";
import AdminPage from "./AdminPage";
import { setUserSession } from "../../utils/Common";
import Modal from "../../Errors/Error";
import Loading from "./Loading";

function AdminLogin(props) {
  // // const [isAuth, setisAuth] = useState(false);
  const [authLoading, setauthLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState(false);
  const [errormessage, setErrormessage] = useState(null);

  const history = useHistory();

  const openModel = () => {
    setShowModal((prev) => !prev);
  };

  const validationSchema = yup.object({
    email: yup.string().required("Required"),
    password: yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("submit Clicked");
    console.log(JSON.stringify(values.email));
    console.log(values.password);
    setauthLoading(true);

    fetch("http://localhost:8080/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.email,
        password: values.password,
      }),
    })
      .then((res) => {
        if (res.status === 422) {
          throw new Error("Validation Failed");
        }
        if (res.status === 401) {
          throw new Error("A user with this email can't be found");
        }
        if (res.status === 402) {
          throw new Error("Wrong Password");
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log("Error");
          throw new Error("Please Check your Credentials !");
        }

        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        setauthLoading(false);
        // ("token", resData.token);
        setUserSession(resData.token, resData.userId);
        const remaininiMillisecond = 60 * 60 * 100;
        const expriyDate = new Date(
          new Date().getTime() + remaininiMillisecond
        );

        props.history.push("/AdminPage");

        // history.push("/AdminPage", token);
      })
      .catch((err) => {
        // console.log(err);
        // console.log(err.response.statusText);
        // console.log(err);
        // alert(err.message);
        setError(true);
        setauthLoading(false);
        setErrormessage(err.message);
        openModel();
      });
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <>
      {authLoading ? (
        <Loading />
      ) : (
        <div>
          <FormContainer onSubmit={formik.handleSubmit}>
            <Text>Welcome To Admin Panel</Text>
            <EmailPassword>
              <h5>
                E-mail{" "}
                {formik.errors.email && formik.touched.email && (
                  <ErrorText>{formik.errors.email}</ErrorText>
                )}
              </h5>
              <Input
                name="email"
                type="text"
                placeholder="Enter your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.email && formik.touched.email && "error"
                }
              />

              <h5>
                Password{" "}
                {formik.errors.password && formik.touched.password && (
                  <ErrorText>{formik.errors.password}</ErrorText>
                )}
              </h5>
              <Input
                name="password"
                type="password"
                placeholder="Enter your Password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.password && formik.touched.password && "error"
                }
              />
            </EmailPassword>
            {/* <Text>{token}</Text> */}
            <SubmitButton type="submit">Submit</SubmitButton>

            {/* {error === "" ? null : alert(error)} */}
          </FormContainer>
          {error ? (
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              errormessage={errormessage}
            />
          ) : null}
        </div>
      )}
    </>
  );
}

export default AdminLogin;

const ErrorText = styled.label`
  margin-top: 0;
  margin-bottom: 5px;
  color: red;
  text-decoration: none;
  font-weight: 500;
`;

const Text = styled.div`
  color: #3c574e;
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: underline;
`;

const FormContainer = styled.form`
  background-color: #020035;
  display: flex;
  flex-direction: column;
  width: 30em;
  height: 20em;
  padding: 20px;
  top: 50%;
  left: 50%;
  margin-left: -15em;
  margin-top: -9em;
  position: fixed;
  border-radius: 20px;
`;

const EmailPassword = styled.div`
  height: 15em;
  display: flex;
  flex-direction: column;
  padding: 10px;
  width: 20em;
  top: 35.5%;
  left: 39%;
  position: fixed;

  h5 {
    color: #3c574e;
    margin-top: 0;
    margin-bottom: 5px;
    left: -10%;
  }
`;

export const SubmitButton = styled.button`
  top: 12em;
  left: 20em;
  position: relative;
  padding: 11px 1.6em;
  width: 7em;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgba(241, 196, 15, 1);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
  &:focus {
    outline: none;
  }
  &:hover {
    filter: brightness(1.03);
  }
  &:disabled {
    filter: contrast(0.7);
  }
`;

export const Input = styled.input`
  margin-bottom: 10px;
  width: 20em;
  height: 30px;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  border-radius: 15px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.03);
  padding: 0 10px;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid transparent;

  &:focus {
    outline: none;
    border-bottom: 2px solid #111;
  }
  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  }
`;
