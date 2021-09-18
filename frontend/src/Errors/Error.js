import React from "react";
import styled from "styled-components";

function Modal({ showModal, setShowModal, errormessage }) {
  return (
    <>
      {showModal ? (
        <ErrorMessageContainer showModal={showModal}>
          <h3>Error</h3>
          <ServerErrorText>{errormessage}</ServerErrorText>
          <ErrorMessageButton
            onClick={() => {
              setShowModal((prev) => !prev);
            }}
          >
            Okay
          </ErrorMessageButton>
        </ErrorMessageContainer>
      ) : null}
    </>
  );
}

export default Modal;

const ServerErrorText = styled.label`
  position: fixed;
  top: 47%;
  left: 40%;
  font-size: 1rem;
`;

const ErrorMessageButton = styled.button`
  position: fixed;
  top: 53%;
  left: 56%;
  padding: 10px 20px;
  border-radius: 10px;
  cursor: pointer;
`;

const ErrorMessageContainer = styled.div`
  width: 25em;
  height: 10em;
  top: 40%;
  left: 35%;
  border-radius: 20px;
  position: fixed;
  background-color: whitesmoke;
  z-index: 999;

  h3 {
    padding: 0 50px;
  }
`;
