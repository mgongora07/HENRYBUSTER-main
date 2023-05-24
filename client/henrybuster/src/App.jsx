import React, { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
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
import Sidebar from "./components/Admin/Sidebar";

function App() {
  return (
    <>
      <CartProvider>
        <AuthProvider>
          <Nav />
          {location.pathname === "/admin" && <Sidebar />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Detail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            {/* admin */}
            <Route path="admin/create" element={<CreateMovie />} />
            <Route path="admin/update/:id" element={<UpdateMovie />} />
            <Route path="admin/create/genre" element={<CreateGenre />} />
            <Route path="admin/update/genre/:id" element={<UpdateGenre />} />
            <Route path="admin/AllGenre" element={<AllGenres />} />
            <Route path="/admin/*" element={<Admin />} />
            <Route path="/admin/movies" element={<MoviesAdmin />} />
            <Route path="/results" element={<SearchResult />} />

            {/* ------- */}
          </Routes>
        </AuthProvider>
      </CartProvider>
    </>
  );
}

export default App;
