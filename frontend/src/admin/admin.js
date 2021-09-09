import React from "react";
import styled from "styled-components";
import "../Styles/admin.css";

function admin() {
  return (
    <>
      <div>
        <AdminOuterContainer>
          <Text>Welcome To Admin Panel</Text>
          <EmailPassword>
            <h5>Username</h5>
            <input
              type="text"
              placeholder="Enter your Username"
              className="EmailContainer"
            />
            <h5>Password</h5>
            <input
              type="password"
              placeholder="Enter your Password"
              className="EmailContainer"
            />
          </EmailPassword>
        </AdminOuterContainer>
      </div>
    </>
  );
}

export default admin;

const Text = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: underline;
`;

const AdminOuterContainer = styled.div`
  background-color: #2962ff;
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
    color: red;
    margin-top: 0;
    margin-bottom: 5px;
    left: -10%;
  }
`;
