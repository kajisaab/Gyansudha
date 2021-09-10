import axios from "axios";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import styled from "styled-components";
import * as yup from "yup";

const validationSchema = yup.object({
  username: yup.string().required("Required"),
  password: yup.string().required("Required"),
});

function AdminLogin() {
  const history = useHistory();
  const formik = useFormik({
    initialValues: { username: "", password: "" },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const respone = await axios
        .post("http://localhost:8080/login/adminlogin", values)
        .then(
          alert("This data is submitting"),
          history.push("/"),
          console.log("this is the login data", values)
        )
        .catch((err) => {
          alert("There error occurred  ", err);
        });
    },
  });
  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <Text>Welcome To Admin Panel</Text>
      <EmailPassword>
        <h5>
          Username{" "}
          {formik.errors.username && formik.touched.username && (
            <ErrorText>{formik.errors.username}</ErrorText>
          )}
        </h5>
        <Input
          name="username"
          type="text"
          placeholder="Enter your Username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className={
            formik.errors.username && formik.touched.username && "error"
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
