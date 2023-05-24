import React from "react";

import Sidebar from "./Sidebar";
import HomeAdmin from "./HomeAdmin";
import MoviesAdmin from "./MoviesAdmin/MoviesAdmin";

import { useSelector } from "react-redux";
import { useAuth } from "../../context/authContext";

function Admin() {
  const { user } = useAuth();

  const { email } = user;

  if (email === "francobaudino98@gmail.com") {
    console.log("eres admin");
  }

  return (
    <div>
      <div className="container-fluid bg-secondary min-vh-100">
        <div className="row">
          <HomeAdmin />
        </div>
      </div>
    </div>
  );
}

export default Admin;
