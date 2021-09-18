import React, { useState, useEffect } from "react";
import styled from "styled-components";
import "../Styles/Body.css";
import Cards from "./Cards";
import Slider from "./Text_Slider/Slider";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import {
  updateSchoolName,
  updateSchoollogo,
} from "../Data/actions/schooldetailsaction";

const WelcomeTitle = "Welcome To Gyansudha English School";
const TitleArray = WelcomeTitle.split("  ");

function Body() {
  const details = useSelector(function (rootReducers) {
    return {
      Schooldetails: rootReducers.schoolDetailReducer.Schooldetails,
    };
  });

  const dispatch = useDispatch();

  const fetchdata = async () => {
    const response = await fetch(
      "http://localhost:8080/schooldetails/details",
      { method: "GET" }
    )
      .then((responsestatus) => {
        if (responsestatus.status !== 200) {
          alert("Failed to fetch the details");
        }
        return responsestatus.json();
      })
      .then((responsedata) => {
        console.log(responsedata.data.data);
        dispatch(updateSchoolName(responsedata.data));
      })

      .catch((err) => {
        console.log("Err: ", err);
      });
  };

  useEffect(() => {
    fetchdata();
  }, []);

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

  // console.log(size);

  // const datalist = details.Schooldetails;
  // console.log(datalist);

  // Getting the individual post ID
  const EditHandler = (postid) => {
    // if (details.Schooldetails.find((p) => p._id === id)) {
    //   console.log("true");
    // } else {
    //   console.log("false");
    // }
    const id = details.Schooldetails.find((p) => p._id === postid);
    console.log(id._id);
  };

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
        {console.log(details.Schooldetails)}
        {details.Schooldetails.map((datum, idex) => (
          <div key={idex}>
            {console.log(datum.SchoolName)}
            {EditHandler(datum._id)}
            {datum.Address},{datum.ImageUrl},{datum.SchoolName}
          </div>
        ))}
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
