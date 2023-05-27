import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

function Sidebar({ handleUser, userRegister }) {
  return (
    <div className="body">
      <div className="sidebar p-2">
        <div className="m-2">
          <i className="bi bi-person-circle me-3 fs-4"></i>
          <span className="brand-name fs-4">Admin Name</span>
        </div>

        <hr className="text-dark" />

        <div className="list-group list-group-flush">
          <span className="list-group-item py-2 text-start">
            <Link to={"/admin"} className="link-no-style">
              <i className="bi bi-speedometer2 fs-5 me-3"></i>
              <span>Dashboard</span>
            </Link>
          </span>

          <div className="list-group-item py-2 text-start">
            <i className="bi bi-collection fs-5 me-3"></i>
            <span>
              Products<i className="bi bi-chevron-down"></i>
            </span>

            <Link to={"/admin/movies"} className="link-no-style">
              <div>
                <i className="bi bi-file-ruled fs-5 me-3"></i>
                <span>All movies</span>
              </div>
            </Link>
            <Link to={"/admin/create"} className="link-no-style">
              <div>
                <i className="bi bi-collection-play-fill fs-5 me-3"></i>
                <span className="sub-category">Create new movie</span>
              </div>
            </Link>
          </div>

          <div className="list-group-item py-2 text-start">
            <i className="bi bi-columns fs-5 me-3"></i>
            <span>Categories</span>
            <i className="bi bi-chevron-down"></i>
            <Link to={"/admin/AllGenre"} className="link-no-style">
              <div>
                <i className="bi bi-file-ruled fs-5 me-3"></i>
                <span>All Genres</span>
              </div>
            </Link>
            <Link to={"/admin/create/genre"} className="link-no-style">
              <div>
                <i className="bi bi-columns-gap fs-5 me-3"></i>
                <span className="sub-category">Create Genre</span>
              </div>
            </Link>
          </div>

          <div className="list-group-item py-2 text-start">
            <i className="bi bi-bag fs-5 me-3"></i>
            <span>
              Order management<i className="bi bi-chevron-down"></i>
            </span>
            <Link to={"/admin/users"} className="link-no-style">
              <div>
                <i className="bi bi-file-ruled fs-5 me-3"></i>
                <span className="sub-category">Users</span>
              </div>
            </Link>
            <Link to={"/admin/purchases"} className="link-no-style">
              <div>
                <i className="bi bi-file-ruled fs-5 me-3"></i>
                <span className="sub-category">Purchases</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
