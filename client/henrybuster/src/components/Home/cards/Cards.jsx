import React from "react";
import { Link } from "react-router-dom";

import style from "./Cards.module.css";

function Cards({ name, image, id, genres }) {
  console.log("estoy aqui");

  return (
    <div className={style.cardBody}>
      <Link to={`/movie/${id}`}>
        <img src={image} alt="" className={style.img} />
      </Link>
      <p>{name}</p>
    </div>
  );
}

export default Cards;
