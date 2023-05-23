import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Sidebar from "../Sidebar";

import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../../redux/actions";

function AllGenres() {
  const { genres } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [genrePage, setGenrePage] = useState("");

  const handlePage = (inicio, fin) => {
    setGenrePage(genres.slice(inicio, fin));
  };
  const split = (num) => {
    if (num === 1) {
      handlePage(0, 10);
    } else {
      const inicio = num * 10 - 10;
      const fin = num * 10;
      handlePage(inicio, fin);
    }
  };

  let pages = genres
    .slice(0, Math.ceil(genres.length / 10))
    .map((recipe, index) => index + 1);

  useEffect(() => {
    setGenrePage(genres.slice(0, 9));
  }, [dispatch]);

  return (
    <div style={{ background: "white" }}>
      <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
        <Sidebar />
      </div>
      <div style={{ width: "80%", marginLeft: "auto", height: "490px" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {genrePage &&
              genrePage.map((e, i) => (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>

                  <td>
                    <Link to={`/admin/update/genre/${e.id}-${e.name}`}>
                      update
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </div>
      <Pagination
        style={{
          margin: "0 auto",
          marginRight: "450px",
          width: "fit-content",
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
    </div>
  );
}

export default AllGenres;
