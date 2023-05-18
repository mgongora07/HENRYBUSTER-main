import React, { useContext } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { CartContext } from "../../Carrito/Context";
import style from "./Cards.module.css";

function Cards({ name, image, id, genres, movies, price, format }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <>
      <Card
        className={style.body}
        style={{ background: "rgb(250,250,250, 0)" }}
      >
        <Link to={`/movie/${id}`}>
          <Card.Img variant="top" src={image} style={{ height: "250px" }} />
        </Link>
        <Card.Body>
          <Card.Title className={style.text}>{name}</Card.Title>
          <Card.Text className={style.text}>
            <span>Format:</span> {format}
          </Card.Text>
          <Card.Text className={style.text}>
            <span>Price$: </span> {price}
          </Card.Text>
          <div className={style.button}>
            <Button onClick={() => addItemToCart(movies)}>Add to cart</Button>
            <Link to={"/Cart"}>
              <Button>View cart</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
