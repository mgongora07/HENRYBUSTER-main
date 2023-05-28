import React, { useContext, useEffect, useState, useRef } from "react";
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

  const pageRef = useRef();

  const handleScrollUp = () => {
    pageRef.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={style.card}>
        <div className={style.card_img}>
          <Link to={`/movie/${id}`} onClick={handleScrollUp}>
            <Card.Img variant="top" src={image} style={{ height: "250px" }} />
          </Link>
        </div>
        <div className={style.card_info}>
          <p className={style.text_title}>
            <Card.Title className={style.text}>{name}</Card.Title>
          </p>
          <Card.Text className={style.text}>
            <span>Format:</span> {format}
          </Card.Text>
        </div>
        <div className={style.card_footer}>
          <div>
            <Card.Text className={style.text}>
              <span className={style.text_title}>${price}</span>
            </Card.Text>
          </div>
          <div className={style.card_button}>
            <Button
              className={stateBuy === true ? "bg-danger" : "bg-success"}
              value={id}
              onClick={handleClick}
              style={{ height: "fit-content" }}
            >
              <i className="fa-solid fa-cart-plus"> + </i>
            </Button>
          </div>
        </div>
        <div className={style.alert}>
          {success ? (
            <Card.Text className="text-success">Added successfully!</Card.Text>
          ) : null}
          {deleteSuccess ? (
            <Card.Text className="text-warning">
              Deleted successfully!
            </Card.Text>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Cards;
