import React from "react";
import style from "../Styles/Nav.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext"


export const Nav = () => {
  
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
console.log(user);

if (!user) {
  ("");
} else {
  var email = user.email;
}




  return (
    <>
      <nav className={style.nav}>
        <div className={style.link}>Hola {email}</div>
        <Link className={style.link} to='/home'>
          Home
        </Link>
        <Link className={style.link} to='/about'>
          About
        </Link>
        <Link className={style.link} to='/Cart'>
          Carrito
        </Link>
        <Link hidden={perfil} className={style.link} to='/login'>
          Login
        </Link>
        <Link
          hidden={!perfil}
          className={style.link}
          onClick={handleLogout}
          to='/home'
        >
          Salir
        </Link>
      </nav>
    </>
  );
};


