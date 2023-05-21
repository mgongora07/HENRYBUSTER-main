import React, { useState } from "react";

import "./App.css";
// import Detail from './Detail'
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/Home";
import { Nav } from "./components/Nav/Nav";
import { Detail } from "./components/Detail/Detail";
import Cart from "./components/Carrito/Cart";
import { CartProvider } from "./components/Carrito/Context";
import { CreateMovie } from "./components/CreateMovie/CreateMovie";
import { UpdateMovie } from "./components/UpdateMovie/UpdateMovie";
import Admin from "./components/Admin/Admin";
import { CreateGenre } from "./components/CreateGenre/CreateGenre";
import MoviesAdmin from "./components/Admin/MoviesAdmin/MoviesAdmin";
function App() {

  return (
    <>
    <CartProvider>


      {location.pathname === "/" ? <Landing /> : <Nav />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />

        <Route path="/create" element={<CreateMovie />} />
        <Route path="/update/:id" element={<UpdateMovie />} />
        <Route path="/create/genre" element={<CreateGenre />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/movies" element={<MoviesAdmin />} /> 
      </Routes>
      </CartProvider>
    </>
  );
}

export default App;
