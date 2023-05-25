import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, splitUsers } from "../../../redux/actions";

function Users() {
  const { allUsers, usersPaginado } = useSelector((state) => state);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();

  const split = (num) => {
    if (num === 1) {
      dispatch(splitUsers(0, 10));
    } else {
      const inicio = num * 10 - 10;
      const fin = num * 10;
      dispatch(splitUsers(inicio, fin));
    }
  };

  let pages = allUsers
    .slice(0, Math.ceil(allUsers.length / 10))
    .map((recipe, index) => index + 1);

  const handleDispatch = (name) => {
    dispatch(getMoviesNameAdmin(name));
  };

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  useEffect(() => {}, [page, handleDispatch]);
  useEffect(() => {
    setPage(1);
  }, [dispatch]);

  return (
    <div className="bg-white" style={{ width: "80%", marginLeft: "auto" }}>
      {" "}
      <Table responsive borderless>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>username</th>
            <th>id</th>
            <th>phoneNumber</th>
            <th>admin</th>
          </tr>
        </thead>
        <tbody>
          {usersPaginado &&
            usersPaginado.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>{e.username}</td>
                <td>{e.id}</td>
                <td>{e.phoneNumber}</td>
                <td>{e.admin ? "true" : "false"}</td>
              </tr>
            ))}
        </tbody>
      </Table>
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
    </div>
  );
}

export default Users;
