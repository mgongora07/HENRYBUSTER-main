import React from "react";

import Sidebar from "./Sidebar";
import HomeAdmin from "./HomeAdmin";
import MoviesAdmin from "./MoviesAdmin/MoviesAdmin";

import { useSelector } from "react-redux";
import { useAuth } from "../../context/authContext";

function Admin() {
  const { user } = useAuth();

  return (
    <div className="container-fluid bg-white" style={{ height: "593px" }}>
      <div className="row">
        <HomeAdmin />
      </div>
    </div>
  );
}

export default Admin;
