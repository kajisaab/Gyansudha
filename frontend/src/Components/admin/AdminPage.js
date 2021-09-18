import React, { useState, useRef, useEffect } from "react";
import { getToken, getUser, removeUserSession } from "../../utils/Common";
import styled from "styled-components";
import Modals from "../../utils/EntryBox";

function AdminPage(props) {
  const [button, setButton] = useState(false);
  const [showModals, setShowModals] = useState(false);

  const user = getUser();

  const handlesignout = () => {
    removeUserSession();
    props.history.push("/adminlogin");
  };

  const AddPost = () => {
    setShowModals((prev) => !prev);
    setButton(true);
  };

  return (
    <div>
      <h1>{user.userId}</h1>
      <h1>Welcome to Admin Page You are Logged In</h1>
      <button onClick={handlesignout}>Sign Out</button>
      <br />
      <br />

      <br />

      <button onClick={AddPost}> Add Post </button>
      {button ? (
        <Modals showModals={showModals} setShowModals={setShowModals} />
      ) : null}
    </div>
  );
}

export default AdminPage;

const SchooldetailsContainer = styled.div`
  position: fixed;
  top: 10vw;
  left: 10vw;
  height: 20vw;
  width: 20vw;
  background-color: red;
`;

const FormContainer = styled.form`
  margin: 10px;
  height: 18vw;
  background-color: green;
`;

const Image = styled.img`
  height: 10vw;
`;

const ImageContainer = styled.div`
  margin-top: 10px;
  height: 16vw;
  width: 18vw;
`;

const Button = styled.button`
  position: absolute;
  top: 35vh;
  left: 13vw;
`;
