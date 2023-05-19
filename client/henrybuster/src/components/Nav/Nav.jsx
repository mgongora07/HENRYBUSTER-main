import React from "react";
import style from "../Styles/Nav.module.css";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";



export const Nav = () => {
  return (
    <nav className={style.nav}>
      <Link className={style.link} to="/"><i class="fa-solid fa-house"></i> HOME</Link>
      <Link className={style.link} to="/Cart"><i class="fa-solid fa-cart-shopping"></i> CART</Link>
      <Link className={style.link} to="/about"><i class="fa-solid fa-address-card"></i> ABOUT</Link>
      <SearchBar/>      
      <Link className={style.link} to="#"><i class="fa-solid fa-arrow-right-from-bracket"></i></Link>
    </nav>
  );
};


