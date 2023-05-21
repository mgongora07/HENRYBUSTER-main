import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { CartContext } from "../../Carrito/Context";
import style from "./Cards.module.css";

function Cards({ name, image, id, genres, movies, price, format }) {
  const { addItemToCart, deleteItemToCart } = useContext(CartContext);
  const [stateBuy, setStateBuy] = useState(false);
  const [success, setSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const valor = localStorage.getItem("cartProducts");
  const valorArray = JSON.parse(valor);

  useEffect(() => {
    const x = valorArray.filter((item) => item.id === id); // Utilizar filter en el array

    if (x.length > 0) {
      setStateBuy(true);
      return;
    }
  }, []);

  const handleClick = (e) => {
    const value = e.target.value;
    if (!stateBuy) {
      addItemToCart(movies);
      setStateBuy(true);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    } else {
      deleteItemToCart(movies);
      setStateBuy(false);
      setDeleteSuccess(true);
      setTimeout(() => {
        setDeleteSuccess(false);
      }, 800);
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
            <span>Price $ </span> {price}
          </Card.Text>
          <div className={style.button}>
            <Button
              className={stateBuy === true ? "bg-danger" : "bg-success"}
              value={id}
              onClick={handleClick}
              style={{ height: "fit-content" }}
            >
              <i class="fa-solid fa-cart-plus"> +</i>
              {/* {stateBuy === true ? "Delete to cart" : "Add to cart"} */}
            </Button>
            <Link to={"/Cart"}>

              
              <Button>
                View cart <i class="fa-solid fa-cart-shopping"></i>
              </Button>

            </Link>
          </div>
          {success ? (
            <Card.Text className="text-success">Agregado con exito !</Card.Text>
          ) : null}
          {deleteSuccess ? (
            <Card.Text className="text-warning">
              Eliminado con exito !
            </Card.Text>
          ) : null}
        </Card.Body>
      </Card>
    </>
  );
}

export default Cards;
