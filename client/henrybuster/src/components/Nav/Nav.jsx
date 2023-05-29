import React, { useEffect, useState } from "react";
import style from "../Styles/Nav.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/authContext";

import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import { getMoviesName, cleanOrders } from "../../redux/actions";
import logo from '../../img/logo_movie.jpg'

export const Nav = ({ handleUser, userRegister }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleSearch = (name) => {
    dispatch(getMoviesName(name));
  };

  const { user, loading, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      // alert("Sign-out successful");
      // await signOut(auth);
      handleUser("");
      await logout();
      navigate("/");
      dispatch(cleanOrders())
    } catch (error) {
      console.log(error);
    }
  };

  const perfil = user ? true : false;

 // console.log(user);



  if (!user) {
    ("");
  } else {
    var email = user.email;
  }

  return (
    <nav className={style.nav}>
      <div className={style.containerLogo}>

       <img src={logo} alt="logo not found"  className={style.logo}/>
      {userRegister && (
        <p className={style.user}>
          Bienvenido {userRegister.name}
        </p>
      )}

      {userRegister && userRegister.admin && (
        <Link className={style.link} to="/admin">
          <i className="fa-solid fa-user"></i> ADMIN
        </Link>
      )}
      </div>

      <div className={style.contentLink}>
      <Link className={style.link} to="/">
        <i className="fa-solid fa-house"></i> HOME
      </Link>
      <Link className={style.link} to="/Cart">
        <i className="fa-solid fa-cart-shopping"></i> CART
      </Link>
      <Link className={style.link} to="/about">
        <i className="fa-solid fa-address-card"></i> ABOUT
      </Link>
      <Link hidden={perfil} className={style.link} to="/login">
        Login
      </Link>
      {location.pathname !== "/admin/movies" && (
        <SearchBar handleSearch={handleSearch} />
      )}
      <Link
        hidden={!perfil}
        className={style.link}
        onClick={handleLogout}
        to="/"
      >
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </Link>
      </div>
    </nav>
  );
};
