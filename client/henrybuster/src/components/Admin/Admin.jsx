import React from "react";
import { Outlet, useLocation, useParams } from "react-router";

import Sidebar from "./Sidebar";
import HomeAdmin from "./HomeAdmin";
import MoviesAdmin from "./MoviesAdmin/MoviesAdmin";

import { useSelector } from "react-redux";
import { useAuth } from "../../context/authContext";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { CreateGenre } from "./genres/CreateGenre/CreateGenre";
import { CreateMovie } from "./MoviesAdmin/CreateMovie/CreateMovie";
import { UpdateMovie } from "./MoviesAdmin/UpdateMovie/UpdateMovie";
import { auto } from "@popperjs/core";

function Admin() {
  const { user } = useAuth();
  const location = useLocation();
  const params = useParams();
  const { id } = params;

  return (
    <Container fluid={true} className="bg-white">
      <Row>
        <Col
          className="col-12 col-sm-auto p-0"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Sidebar />
        </Col>
        <Col classNmae="col-12 col-lg-7">
          <Outlet />
        </Col>
      </Row>
    </Container>
  );
}
/* 
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
*/
export default Admin;
