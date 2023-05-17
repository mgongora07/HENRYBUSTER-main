import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../Carrito/Context";
import style from "./Cards.module.css";

function Cards({ name, image, id, genres, movies, price, format }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className={style.cardBody}>
      <Link to={`/movie/${id}`}>
        <img src={image} alt="" className={style.img} />
      </Link>
      <p>{name}</p>
      <p>Format: {format}</p>
      <p>Price$: {price}</p>
      <div>
        <button onClick={() => addItemToCart(movies)}>Add to cart</button>
        <Link to={"/Cart"}>
          <button>View cart</button>
        </Link>
      </div>
    </div>
  );
}

export default Cards;
