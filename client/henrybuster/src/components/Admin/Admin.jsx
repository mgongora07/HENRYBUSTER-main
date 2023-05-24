import React from "react";

import Sidebar from "./Sidebar";
import HomeAdmin from "./HomeAdmin";
import MoviesAdmin from "./MoviesAdmin/MoviesAdmin";

function Admin() {
  return (
    <div>
      <div className="container-fluid bg-secondary min-vh-100">
        <div className="row">
          <div className="col-4 bg-white vh-100" style={{ width: "25%" }}>
            <Sidebar />
          </div>

          <HomeAdmin />
        </div>
      </div>
    </div>
  );
}

export default Admin;
