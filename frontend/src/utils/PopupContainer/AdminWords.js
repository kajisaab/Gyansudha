import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { updateAdminWords } from "../../Data/actions/schooldetailsaction";

function AdminWordsModal({ showModals, setShowModals }) {
  const [errormessage, setErrormessage] = useState(null);
  const adminwords = useSelector(function (rootReducers) {
    return {
      Description: rootReducers.schoolDescriptionReducer.Description,
    };
  });
  const dispatch = useDispatch();
  const validationSchema = yup.object({
    Designation: yup.string().min(3).required("Minimum Length 5 words"),
    Description: yup.string().min(10).required("Minimum Length 10 words"),
    Name: yup.string().min(5).required("Minimum Length 5 words"),
  });
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

  const HandleImageInput = () => {
    finalInputRef.current.click();
  };

  const onSubmit = (values, { resetForm }) => {
    console.log(values);
    console.log(image);
    const formData = new FormData();
    formData.append("Designation", values.Designation);
    formData.append("Description", values.Description);
    formData.append("Name", values.Name);
    formData.append("image", image);
    fetch("http://localhost:8080/description/createdescription", {
      method: "POST",
      body: formData,
    })
      .then((res) => {
        if (res.status === 422) {
          throw new Error("Couldn't post the data");
        }

        res.json();
      })
      .then((resdata) => {
        console.log(resdata);
      })
      .catch((err) => {
        setErrormessage(err.message);
      });

    // console.log(image);
    setImage("");
    resetForm({ values: "" });
  };

  const formik = useFormik({
    initialValues: { Designation: "", Description: "", Name: "" },
    validateOnBlur: true,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <>
      {showModals ? (
        <div>
          {console.log(adminwords.Description)}
          {/* <h1>{adminwords.Description.Description}</h1> */}

          <FormContainer onSubmit={formik.handleSubmit}>
            <InputField top={39} left={5}>
              {/* <Inputboxandname> */}
              <LabelText
                type={"small"}
                color={
                  formik.touched.Designation && formik.errors.Designation
                    ? "red"
                    : "white"
                }
                fontsize={
                  formik.touched.Designation && formik.errors.Designation
                    ? 12
                    : 16
                }
              >
                {formik.touched.Designation && formik.errors.Designation
                  ? "Designation Required *"
                  : "Designation"}
              </LabelText>
              <InputDescription
                name="Designation"
                type="text"
                placeholder={
                  formik.errors.Designation && formik.touched.Designation
                    ? formik.errors.Designation
                    : "Please Enter Your Designation"
                }
                color={
                  formik.errors.Designation && formik.touched.Designation
                    ? "red"
                    : "black"
                }
                width={30}
                height={2.5}
                margin_left={20}
                type={"random"}
                value={formik.values.Designation}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.Designation &&
                  formik.touched.Designation &&
                  "error"
                }
              ></InputDescription>
              {/* </Inputboxandname> */}
            </InputField>

            <InputField top={24.5} left={50}>
              {/* <---------------------- Name ------------------->  */}
              {/* <Inputboxandname> */}
              <LabelText
                type={"small"}
                color={
                  formik.touched.Name && formik.errors.Name ? "red" : "white"
                }
                fontsize={formik.touched.Name && formik.errors.Name ? 12 : 16}
              >
                {formik.touched.Name && formik.errors.Name
                  ? "Name Required *"
                  : "Name"}
              </LabelText>
              {/* <h1>{formik.errors.Name}</h1> */}
              <InputDescription
                name="Name"
                type="text"
                placeholder={
                  formik.errors.Name && formik.touched.Name
                    ? formik.errors.Name
                    : "Please Enter Your Name"
                }
                color={
                  formik.errors.Name && formik.touched.Name ? "red" : "black"
                }
                width={30}
                height={2.5}
                margin_left={20}
                type={"random"}
                value={formik.values.Name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.Designation &&
                  formik.touched.Designation &&
                  "error"
                }
              ></InputDescription>
              {/* </Inputboxandname> */}
            </InputField>

            {/* <---------------------- Description ------------------->  */}

            <InputField top={26} left={5}>
              <LabelText
                type={"large"}
                color={
                  formik.touched.Description && formik.errors.Description
                    ? "red"
                    : "white"
                }
                fontsize={
                  formik.touched.Description && formik.errors.Description
                    ? 12
                    : 16
                }
              >
                {formik.touched.Description && formik.errors.Description
                  ? "Description Required *"
                  : "Description"}
              </LabelText>
              <MultipleLineInput
                name="Description"
                type="textarea"
                placeholder={
                  formik.errors.Description && formik.touched.Description
                    ? formik.errors.Description
                    : "Please Enter Your Complete Description"
                }
                color={
                  formik.errors.Description && formik.touched.Description
                    ? "red"
                    : "black"
                }
                cols="60"
                rows="16"
                value={formik.values.Description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={
                  formik.errors.Description &&
                  formik.touched.Description &&
                  "errors"
                }
              >
                NoResize
              </MultipleLineInput>
            </InputField>

            {/* <---------------------- Picture Section ------------------->  */}

            <InputField top={-40} left={55}>
              <LabelText type={"large"} color={"white"}>
                {errormessage === null ? errormessage : "Image"}
              </LabelText>
              <Input
                type="file"
                accept="images/*"
                display={"none"}
                ref={finalInputRef}
                objectFit="cover"
                onChange={(event) => {
                  const imagefile = event.target.files[0];
                  if (imagefile) {
                    setImage(imagefile);
                  } else {
                    setImage(null);
                  }
                }}
              ></Input>
              <ImageContainer>
                <img
                  src={preview}
                  style={{
                    objectFit: "contain",
                    height: "100%",
                    width: "100%",
                    maxHeight: "100vh",
                    maxWidth: "100vh",
                    height: "inherit",
                    borderRadius: "20px",
                  }}
                />
              </ImageContainer>
              <Button
                left={60}
                top={-88}
                padding={8}
                onClick={(e) => {
                  e.preventDefault();
                  HandleImageInput();
                }}
              >
                Add Photo
              </Button>
            </InputField>

            <SubmitButton type="submit">Submit</SubmitButton>

            <Button
              top={-35}
              left={75}
              padding={10}
              onClick={() => {
                setShowModals((prev) => !prev);
                setImage("");
              }}
            >
              Cancel
            </Button>

            <br />
          </FormContainer>
        </div>
      ) : null}
    </>
  );
}

export default AdminWordsModal;

const FormContainer = styled.form`
  background-color: #001219;
  display: flex;
  flex-direction: column;
  width: 60em;
  height: 30em;
  top: 15%;
  left: 15%;
  position: fixed;
  border-radius: 20px;
  justify-content: space-evenly;
  position: fixed;
`;

const Input = styled.input`
  position: relative;
  margin: 40px 0px 0px 30px;
  background-color: red;
  width: 20rem;
  height: 2rem;
  text-indent: 10px;
  outline: none;
  text-decoration: none;
  border: none;
  border-radius: 8px;
  display: ${(props) => props.display};
`;

const ImageContainer = styled.div`
  position: relative;
  margin-left: 20px;
  top: 10px;
  left: 20px;
  height: 200px;
  width: 200px;
  border-radius: 20px;
  background-color: white;
`;

// This is used to change the location of the input field with the Description
const InputField = styled.div`
  position: relative;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  padding: 5px;
  max-width: 25vw;
  justify-content: space-evenly;
`;

const InputDescription = styled.input`
  width: ${(props) => props.width}em;
  height: ${(props) => props.height}em;
  text-justify: auto;
  text-align: start;
  font-family: "Roboto", sans-serif;
  margin-left: ${(props) => props.margin_left}px;
  border-radius: 15px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.03);
  padding: 0 10px;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid transparent;
  position: relative;

  ::placeholder {
    color: ${(props) => props.color};
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #111;
  }
  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  }
`;

const MultipleLineInput = styled.textarea`
  resize: none;
  text-justify: auto;
  font-family: "Roboto", sans-serif;
  text-align: start;
  margin-left: 20px;
  margin-right: 10px;
  border-radius: 15px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.03);
  padding: 0 10px;
  transition: all, 200ms ease-in-out;
  box-sizing: border-box;
  border-bottom: 1.4px solid transparent;
  padding: 10px;
  text-indent: 10px;
  position: relative;
  ::placeholder {
    color: ${(props) => props.color};
    text-indent: 10px;
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid #111;
  }
  &:not(:last-of-type) {
    border-bottom: 1.4px solid rgba(200, 200, 200, 0.4);
  }
`;

const LabelText = styled.label`
  display: flex;
  flex-direction: column;
  font-size: ${(props) => props.fontsize}px;
  color: ${(props) => props.color};
  justify-content: ${(props) =>
    props.type === "small" ? `center` : `flex-start`};
  margin-top: ${(props) => (props.type === "small" ? -2 : 8)}px;
  margin-left: 18px;
  margin-bottom: 5px;
  position: relative;
`;

const SubmitButton = styled.button`
  position: relative;
  top: -27%;
  left: 10%;
  padding: 10px;
  border-radius: 10px;
  outline: border;
  border: 0;
  background-color: white;
  max-width: 80px;
  max-height: 50px;
  box-shadow: 0px 5px 10px rgba(darken(dodgerblue, 40%));
  transition: all 0.3s;
  cursor: pointer;
  border-bottom: 4px solid lightgreen(gray, 70%);

  &:hover {
    box-shadow: 0px 15px 25px -5px rgba(darken(dodgerblue, 40%));
    transform: scale(1.03);
  }
  &:active {
    box-shadow: 0x 4px 8px rgba(darken(dodgerblue, 30%));
    transform: scale(0.98);
  }
`;

const Button = styled.button`
  position: relative;
  top: ${(props) => props.top}%;
  left: ${(props) => props.left}%;
  padding: ${(props) => props.padding}px;
  border-radius: 10px;
  outline: border;
  border: 0;
  background-color: white;
  max-width: 80px;
  max-height: 50px;
  box-shadow: 0px 5px 10px rgba(darken(dodgerblue, 40%));
  transition: all 0.3s;
  cursor: pointer;
  border-bottom: 4px solid lightgreen(gray, 70%);

  &:hover {
    box-shadow: 0px 15px 25px -5px rgba(darken(dodgerblue, 40%));
    transform: scale(1.03);
  }
  &:active {
    box-shadow: 0x 4px 8px rgba(darken(dodgerblue, 30%));
    transform: scale(0.98);
  }
`;
