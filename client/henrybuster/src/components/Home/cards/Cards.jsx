import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { CartContext } from "../../Carrito/Context";
import style from "./Cards.module.css";

function Cards({ name, image, id, genres, movies, price, format }) {
  const { addItemToCart, deleteItemToCart } = useContext(CartContext);
  const [stateBuy, setStateBuy] = useState(false);

  const handleClick = () => {
    if (!stateBuy) {
      addItemToCart(movies);
      setStateBuy(true);
    } else {
      deleteItemToCart(movies);
      setStateBuy(false);
    }
  };

  return (
    <>
      <Card className={style.body} style={{ background: "rgb(0,0,0,0)" }}>
        <Link to={`/movie/${id}`}>
          <Card.Img variant="top" src={image} style={{ height: "250px" }} />
        </Link>
        <Card.Body className={style.cardBody}>
          <Card.Title className={style.text}>{name}</Card.Title>
          <Card.Text className={style.text}>
            <span>Format:</span> {format}
          </Card.Text>
          <Card.Text className={style.text}>
            <span>Price $: </span> {price}
          </Card.Text>
          <div className={style.button}>
            <Button
              className={stateBuy === true ? "bg-success" : null}
              onClick={handleClick}
              style={{ height: "fit-content" }}
            >
              <i class="fa-solid fa-cart-plus"> +</i>
            </Button >
            <Link to={"/Cart"}>
              <Button>View cart <i class="fa-solid fa-cart-shopping"></i></Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
