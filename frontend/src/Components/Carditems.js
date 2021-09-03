import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Cardsitem.css";

function Cardsitems(props) {
  return (
    <>
      <li className="cards__item">
        <figure className="cards__items__pic-wrap">
          <img src={props.src} alt="" className="cards__item__img" />
        </figure>
        <div className="description">
          <div className="title">
            <h3>{props.title}</h3>
          </div>
          <p className="paragraph">{props.description}</p>
        </div>
      </li>
      <p className="name">~ {props.name}</p>
    </>
  );
}

export default Cardsitems;
