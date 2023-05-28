import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Nav } from "./components/Nav/Nav";
import { Detail } from "./components/Detail/Detail";
import Cart from "./components/Carrito/Cart";
import { CartProvider } from "./components/Carrito/Context";

import { AuthProvider } from "./context/authContext";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

import { CreateMovie } from "./components/Admin/MoviesAdmin/CreateMovie/CreateMovie";
import { UpdateMovie } from "./components/Admin/MoviesAdmin/UpdateMovie/UpdateMovie";
import Admin from "./components/Admin/Admin";
import { CreateGenre } from "./components/Admin/genres/CreateGenre/CreateGenre";
import MoviesAdmin from "./components/Admin/MoviesAdmin/MoviesAdmin";
import HomeAdmin from "./components/Admin/HomeAdmin";
import SearchResult from "./components/SearchBar/SearchResult";
import AllGenres from "./components/Admin/genres/AllGenres";
import UpdateGenre from "./components/Admin/genres/UpdateGenre";

import Payment from "./components/Carrito/Payment";
import Sidebar from "./components/Admin/Sidebar";
import About from "./components/About/About";
import RouteError from "./components/RouteError/RouteError";
import axios from "axios";
import Users from "./components/Admin/users/Users";

import UserProfile from "./components/Users/UserProfile";



import Purchases from "./components/Admin/purchases/purchases";

function App() {
  const location = useLocation();

  const [userRegister, setUser] = useState({});

  const handleUser = async (id) => {
    if (id === "") {
      localStorage.setItem("user", JSON.stringify(""));
    } else {
      let userRegister = await axios.get(`http://localhost:3001/user/${id}`);
      let user = userRegister.data;
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }
    }
    let storedPayload = localStorage.getItem("user");
    if (storedPayload) {
      setUser(JSON.parse(storedPayload));
    }
  };

  useEffect(() => {
    let storedPayload = localStorage.getItem("user");
    if (storedPayload) {
      setUser(JSON.parse(storedPayload));
    }
  }, []);
  useEffect(() => {}, [userRegister]);

  return (
    <>
      <CartProvider>
        <AuthProvider>
          <Nav handleUser={handleUser} userRegister={userRegister} />
          {location.pathname.startsWith("/admin") && userRegister.admin ? (
            <Sidebar handleUser={handleUser} userRegister={userRegister} />
          ) : null}
          <Routes>
            <Route path="/" element={<Home handleUser={handleUser} />} />
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/payment" element={<Payment />} />
            {/* admin */}

            {userRegister && userRegister.admin ? (
              <>
                <Route path="admin/create" element={<CreateMovie />} />
                <Route path="admin/update/:id" element={<UpdateMovie />} />
                <Route path="admin/create/genre" element={<CreateGenre />} />
                <Route
                  path="admin/update/genre/:id"
                  element={<UpdateGenre />}
                />
                <Route path="admin/AllGenre" element={<AllGenres />} />
                <Route path="/admin/*" element={<Admin />} />
                <Route path="/admin/movies" element={<MoviesAdmin />} />
                <Route
                  path="/admin/users"
                  element={<Users userRegister={userRegister} />}
                />
                <Route path="/admin/purchases" element={<Purchases />} />
              </>
            ) : (
              <Route path="/admin" element={<RouteError />} />
            )}
            <Route path="/results" element={<SearchResult />} />
          </Routes>
        </AuthProvider>
      </CartProvider>
    </>
  );
}

export default App;
