import React, { useState } from "react";

import "./App.css";
// import Detail from './Detail'
import { Routes, Route, useLocation } from "react-router-dom";
import { Landing } from "./components/Landing/Landing";
import { Home } from "./components/Home/Home";
import { Nav } from "./components/Nav/Nav";
import { Detail } from "./components/Detail/Detail";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname === "/" ? <Landing /> : <Nav />}

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/movie/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
