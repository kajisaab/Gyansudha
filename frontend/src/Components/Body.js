import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../Styles/Body.css";
import Cards from "./Cards";
import Slider from "./Text_Slider/Slider";

const WelcomeTitle = "Welcome To Gyansudha English School";
const TitleArray = WelcomeTitle.split("  ");

function Body() {
  const [size, setSize] = useState(true);
  const [marginsize, setMarginSize] = useState(0);

  useEffect(() => {
    WidthSize();
  }, []);

  const WidthSize = () => {
    if (window.innerWidth < 960) {
      setSize(false);
      // change the height of the title when it is in the mobile view mode
      setMarginSize(-500);
    } else {
      setSize(true);
      // change the height of the title when it is in the desktop mode
      setMarginSize(-500);
    }
  };

  window.addEventListener("resize", WidthSize);

  console.log(size);
  return (
    <>
      <div className="body">
        <BackgroundImage shrink={marginsize} />

        <div
          className={
            size
              ? "welcome-title-message-container"
              : "shrink-welcome-title-message-container"
          }
        >
          {TitleArray.map((text, idx) => (
            <span
              key={idx}
              className={size ? "welcome-title" : "shrinkwelcome-title"}
            >
              {text}
            </span>
          ))}
          <Slider />
        </div>

        <div className="content">
          <Cards />
        </div>
      </div>
    </>
  );
}

export default Body;

const BackgroundImage = styled.div`
  background-image: url("./images/college.jpg");
  height: 90vh;
  width: auto;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  overflow: hidden;
  mask-image: linear-gradient(to bottom, rgba(0, 0, 0), rgba(0, 0, 0, 0));
  z-index: inherit;
  margin-bottom: ${(props) => props.shrink}px;
`;
