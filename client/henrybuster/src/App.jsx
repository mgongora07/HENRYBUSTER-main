import React, { useState } from "react";

import "./App.css";
// import Detail from './Detail'
import { Routes, Route } from "react-router-dom";

import { Home } from "./components/Home/Home";
import { Nav } from "./components/Nav/Nav";
import { Detail } from "./components/Detail/Detail";
import Cart from "./components/Carrito/Cart";
import { CartProvider } from "./components/Carrito/Context";

function App() {
  return (
    <>
      <CartProvider>
        <Nav />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
