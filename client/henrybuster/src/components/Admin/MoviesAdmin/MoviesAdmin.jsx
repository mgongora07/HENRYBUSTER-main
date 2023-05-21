import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";

import Sidebar from "../Sidebar";
import { getMoviesAdmin, splitRecipesAdmin } from "../../../redux/actions";

function MoviesAdmin() {
  const [page, setPage] = useState(1);
  const { paginadoAdmin, moviesAdmin } = useSelector((state) => state);

  const split = (num) => {
    if (num === 1) {
      dispatch(splitRecipesAdmin(0, 10));
    } else {
      const inicio = num * 10 - 10;
      const fin = num * 10;
      dispatch(splitRecipesAdmin(inicio, fin));
    }
  };

  const dispatch = useDispatch();

  let pages = moviesAdmin
    .slice(0, Math.ceil(moviesAdmin.length / 10))
    .map((recipe, index) => index + 1);

  useEffect(() => {
    dispatch(getMoviesAdmin());
    setPage(1);
  }, [dispatch]);
  useEffect(() => {}, [page]);
  return (
    <>
      <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
        <Sidebar />
      </div>
      <div
        style={{
          width: "80%",
          marginLeft: "auto",

          height: "500px",
        }}
      >
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Genres</th>
              <th>Price</th>

              <th>Stock</th>

              <th>Actualizar</th>
            </tr>
          </thead>
          <tbody>
            {paginadoAdmin &&
              paginadoAdmin.map((e) => (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.Genres.map((a) => a.name + ", ")}</td>
                  <td>{e.price}</td>
                  <td>{e.Inventory.quantity}</td>
                  <td>update</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      <Pagination
        style={{
          width: "60%",
          marginLeft: "auto",
          marginRight: "20px",
        }}
      >
        <Pagination.Prev
          disabled={page === 1 ? true : false}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);

              split(page - 1);
            }
          }}
        />
        {pages.map((e) => (
          <Pagination.Item
            key={e}
            onClick={() => {
              setPage(e);
              split(e);
            }}
            active={e === page}
          >
            {e}
          </Pagination.Item>
        ))}
        <Pagination.Next
          disabled={page === pages.length ? true : false}
          onClick={() => {
            if (page < pages.length) {
              setPage(page + 1);
              split(page + 1);
            }
          }}
        />
      </Pagination>
    </>
  );
}

export default MoviesAdmin;
