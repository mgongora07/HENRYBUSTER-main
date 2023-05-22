import React, { useState } from "react";
import "./App.css";
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
import HomeAdmin from "./components/Admin/HomeAdmin";
import SearchResult from "./components/SearchBar/SearchResult";

function App() {
  return (
    <>
      <CartProvider>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="admin/create" element={<CreateMovie />} />
          <Route path="admin/update/:id" element={<UpdateMovie />} />
          <Route path="admin/create/genre" element={<CreateGenre />} />
          <Route path="/admin/*" element={<Admin />} />
          <Route path="/admin/movies" element={<MoviesAdmin />} />
          <Route path="/results" element={<SearchResult />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
