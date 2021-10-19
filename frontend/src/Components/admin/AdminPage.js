import React, { useState, useRef, useEffect } from "react";
import { getToken, getUser, removeUserSession } from "../../utils/Common";
import styled from "styled-components";
import SchoolDetailsModal from "../../utils/PopupContainer/SchoolDetailsModal";
import AdminWordsModal from "../../utils/PopupContainer/AdminWords";

function AdminPage(props) {
  const [button, setButton] = useState("");
  const [showModals, setShowModals] = useState(false);
  // const [modalname, setModalName] = useState("");

  const user = getUser();

  const handlesignout = () => {
    removeUserSession();
    props.history.push("/adminlogin");
  };

  const Addschooldetails = () => {
    setShowModals((prev) => !prev);
    setButton("Schooldetails");
  };

  const Addadminwords = () => {
    setShowModals((prev) => !prev);
    setButton("Admin Words");
  };

  return (
    <div>
      <h1>{user.userId}</h1>
      <h1>Welcome to Admin Page You are Logged In</h1>
      <button onClick={handlesignout}>Sign Out</button>
      <br />
      <br />

      <br />

      <button onClick={Addschooldetails}> Add School Details </button>

      {button === "Schooldetails" ? (
        <SchoolDetailsModal
          showModals={showModals}
          setShowModals={setShowModals}
        />
      ) : null}

      <br />
      <br />
      <br />

      <button onClick={Addadminwords}> Add Admin Words </button>

      {button === "Admin Words" ? (
        <AdminWordsModal
          showModals={showModals}
          setShowModals={setShowModals}
        />
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
