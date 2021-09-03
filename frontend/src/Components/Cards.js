import React, { useState } from "react";
import Cardsitems from "./Carditems";
import "../Styles/Cards.css";

const WordsFromAdministration = [
  {
    Designation: "Managing Director",
    image: "./images/th.jpg",
    Name: "Shreeram Khadka",
    description:
      "Fittingly, when the Argentine superstar came on in the 66th minute\
         Sunday, he was replacing former Barcelona teammate Neymar. Messi\
         received a raucous ovation, and not just from the PSG supporters at\
         Stade Auguste-Delaune in Reims. With “Messi! Messi!” chants ringing\
         throughout the 20,000-seat stadium, thousands there showed their appreciation\
         for the soccer deity suddenly plying his trade in France’s top league.\
      The welcome he got was something beautiful to see and hear, on the part of\
      our fans but also the Reims fans,” PSG Coach Mauricio Pochettino said after his\
      quad topped Reims, 2-0. “Messi was very happy about it. His presence generates more\
      enthusiasm, everyone can feel it, and it has an effect on the other players.\
      when the Argentine superstar came on in the 66th minute\
         Sunday, he was replacing former Barcelona teammate Neymar. Messi\
         received a raucous ovation, and not just from the PSG supporters at\
         Stade Auguste-Delaune in Reims. With “Messi! Messi!” chants ringing\
         throughout the 20,000-seat stadium, thousands there showed their appreciation\
         for the soccer deity suddenly plying his trade in France’s top league.\
      The welcome he got was something beautiful to see and hear, on the part of\
      our fans but also the Reims fans,” PSG Coach Mauricio Pochettino said after his\
      quad topped Reims, 2-0. “Messi was very happy about it. His presence generates more\
      enthusiasm, everyone can feel it, and it has an effect on the other players",
  },
  {
    Designation: "Managing Director",
    image: "./images/th.jpg",
    Name: "Shreeram Khadka",
    description:
      "Fittingly, when the Argentine superstar came on in the 66th minute\
         Sunday, he was replacing former Barcelona teammate Neymar. Messi\
         received a raucous ovation, and not just from the PSG supporters at\
         Stade Auguste-Delaune in Reims. With “Messi! Messi!” chants ringing\
         throughout the 20,000-seat stadium, thousands there showed their appreciation\
         for the soccer deity suddenly plying his trade in France’s top league.\
      The welcome he got was something beautiful to see and hear, on the part of\
      our fans but also the Reims fans,” PSG Coach Mauricio Pochettino said after his\
      quad topped Reims, 2-0. “Messi was very happy about it. His presence generates more\
      enthusiasm, everyone can feel it, and it has an effect on the other players.\
      when the Argentine superstar came on in the 66th minute\
         Sunday, he was replacing former Barcelona teammate Neymar. Messi\
         received a raucous ovation, and not just from the PSG supporters at\
         Stade Auguste-Delaune in Reims. With “Messi! Messi!” chants ringing\
         throughout the 20,000-seat stadium, thousands there showed their appreciation\
         for the soccer deity suddenly plying his trade in France’s top league.\
      The welcome he got was something beautiful to see and hear, on the part of\
      our fans but also the Reims fans,” PSG Coach Mauricio Pochettino said after his\
      quad topped Reims, 2-0. “Messi was very happy about it. His presence generates more\
      enthusiasm, everyone can feel it, and it has an effect on the other players",
  },
];

function Cards() {
  const [mobileview, setMobileView] = useState(false);

  const Mobview = () => {
    if (window.innerWidth >= 960) {
      setMobileView(false);
    } else {
      setMobileView(true);
    }
  };

  window.addEventListener("resize", Mobview);

  return (
    <div className="cards">
      <h1>Some Words From Administration</h1>
      {WordsFromAdministration.map((data, key) => (
        <div
          className={
            mobileview ? "desktopcards__container" : "mobilecards__container"
          }
          key={key}
        >
          <ul className="cards__items">
            <Cardsitems
              src={"./images/th.jpg"}
              title={data.Designation}
              description={data.description}
              name={data.Name}
            />
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Cards;
