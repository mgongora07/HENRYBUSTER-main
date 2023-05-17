import React from "react";
import style from "../Styles/Nav.module.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className={style.nav}>
      <Link className={style.link} to="/home">Home</Link>
      <Link className={style.link} to="/about">About</Link>
      <Link className={style.link} to="/Cart">Carrito</Link>
      <Link className={style.link} to="/">Salir</Link>
    </nav>
  );
};


