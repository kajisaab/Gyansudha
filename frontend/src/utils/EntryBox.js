import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

function Modals({ showModals, setShowModals }) {
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const finalInputRef = useRef();

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  const HandleImageInput = (event) => {
    event.preventDefault();
    finalInputRef.current.click();
  };
  return (
    <>
      {showModals ? (
        <DataEntryContainer showModal={showModals}>
          <Input
            type="text"
            placeholder="Please Enter Your School Name"
          ></Input>
          <Input
            type="file"
            accept="images/*"
            display={"none"}
            ref={finalInputRef}
            onChange={(event) => {
              const imagefile = event.target.files[0];
              if (imagefile) {
                setImage(imagefile);
              } else {
                setImage(null);
              }
            }}
          ></Input>
          <Buttons
            padding={"7"}
            topspacing={38}
            leftspacing={37.2}
            onClick={HandleImageInput}
          >
            Add Logo
          </Buttons>
          <ImageContainer>
            <img
              src={preview}
              style={{ objectFit: "cover", height: "inherit" }}
            />
          </ImageContainer>

          <Buttons
            topspacing={82}
            leftspacing={38}
            padding={"10"}
            onClick={() => {
              alert("You can Add this Post !");
              setShowModals((prev) => !prev);
            }}
          >
            Add Post
          </Buttons>
        </DataEntryContainer>
      ) : null}
    </>
  );
}

export default Modals;

const Input = styled.input`
  margin: 40px 0px 0px 30px;
  background-color: white;
  width: 20rem;
  height: 2rem;
  text-indent: 10px;
  outline: none;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  display: ${(props) => props.display};
`;

const Buttons = styled.button`
  position: fixed;
  top: ${(props) => props.topspacing}%;
  left: ${(props) => props.leftspacing}%;
  padding: ${(props) => props.padding}px;
  /* padding: 10px 20px; */
  border-radius: 10px;
  cursor: pointer;
`;

const DataEntryContainer = styled.div`
  width: 35em;
  height: 30em;
  top: 20%;
  left: 35%;
  border-radius: 20px;
  position: fixed;
  background-color: black;
  z-index: 999;

  h3 {
    padding: 0 50px;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 24%;
  left: 30%;
  height: 15vw;
  width: 15vw;
  background-color: white;
`;
