import React from "react";
import style from "../Styles/Nav.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/authContext";

import { useDispatch } from "react-redux";
import SearchBar from "../SearchBar/SearchBar";
import { getMoviesName } from "../../redux/actions";

export const Nav = () => {
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
      await logout();
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const perfil = user ? true : false;
  //console.log(user);

  if (!user) {
    ("");
  } else {
    var email = user.email;
  }

  return (
    <nav className={style.nav}>
      <h3 style={{ color: "white", marginRight: "auto" }}>Movie Prime</h3>
      <Link className={style.link} to='/'>
        <i class='fa-solid fa-house'></i> HOME
      </Link>
      <Link className={style.link} to='/admin'>
        <i class='fa-solid fa-user'></i> ADMIN
      </Link>
      <Link className={style.link} to='/Cart'>
        <i class='fa-solid fa-cart-shopping'></i> CART
      </Link>
      <Link className={style.link} to='/about'>
        <i class='fa-solid fa-address-card'></i> ABOUT
      </Link>
      {location.pathname !== "/admin/movies" && (
        <SearchBar handleSearch={handleSearch} />
      )}
      <Link className={style.link} to='#'>
        <i class='fa-solid fa-arrow-right-from-bracket'></i>
      </Link>
    </nav>
  );
};
