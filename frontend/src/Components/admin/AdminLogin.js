import React, { useState } from "react";
import axios from "axios";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import styled from "styled-components";
import * as yup from "yup";
import AdminPage from "./AdminPage";

function AdminLogin() {
  // // const [isAuth, setisAuth] = useState(false);
  const [authLoading, setauthLoading] = useState(false);
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState("");
  const history = useHistory();
  // const formik = useFormik({
  //   initialValues: { email: "", password: "" },
  //   validateOnBlur: true,
  // validationSchema: validationSchema,
  //   submit: async (values) => {
  //     console.log("submit Clicked");
  //     const data = {
  //       email: values.email,
  //       password: values.password,
  //     };
  //     setauthLoading(true);
  //     const respone = await axios
  //       .post("http://localhost:8080/login/login", data, {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       })
  //       .then(
  //         (res) => {
  //           if (res.status === 422) {
  //             throw new Error("Validation Failde");
  //           }
  //           if (res.status !== 200 && res.status !== 201) {
  //             console.log("Error");
  //             throw new Error("Could not authenticate you !");
  //           }
  //           return res.json();
  //         },
  //         alert("This data is submitting"),
  //         console.log("this is the login data")
  //       )
  //       .then((resData) => {
  //         console.log(resultdata);
  //         setauthLoading(false);
  //         setUserId(resultdata.userId);
  //         setToken(resultdata.tokne);
  //         localStorage.setItem("token", resultdata.token);
  //         localStorage.setItem("userId", resultdata.userId);
  //         const remaininiMillisecond = 60 * 60 * 100;
  //         console.log("here working");
  //         const expriyDate = new Date(
  //           new Date().getTime() + remaininiMillisecond
  //         );
  //         history.push("/AdminPage");
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //         setauthLoading(false);
  //         alert("There error occurred  ", err);
  //       });
  //   },
  // });

  const validationSchema = yup.object({
    email: yup.string().required("Required"),
    password: yup.string().required("Required"),
  });

  const onSubmit = async (values) => {
    console.log("submit Clicked");

    const respone = await axios
      .post("http://localhost:8080/auth/login", values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        if (res.status === 422) {
          throw new Error("Validation Failed");
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log("Error");
          throw new Error("Could not authenticate you !");
        }
        return res;
      })
      .then((resData) => {
        // console.log(resData);
        setauthLoading(false);
        setUserId(resData.userId);
        setToken(resData.tokne);
        localStorage.setItem("token", resData.token);
        localStorage.setItem("userId", resData.userId);
        const remaininiMillisecond = 60 * 60 * 100;
        const expriyDate = new Date(
          new Date().getTime() + remaininiMillisecond
        );
        history.push("/AdminPage");
      })
      .catch((err) => {
        // console.log(err);
        // console.log(err.response.statusText);
        setauthLoading(false);
        alert("You are not " + err.response.statusText);
      });
  };

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
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
          className={formik.errors.email && formik.touched.email && "error"}
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
      <SubmitButton type="submit">Submit</SubmitButton>
    </FormContainer>
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
