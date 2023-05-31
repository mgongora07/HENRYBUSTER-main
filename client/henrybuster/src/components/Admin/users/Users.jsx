import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, splitUsers } from "../../../redux/actions";
import axios from "axios";

function Users({ userRegister }) {
  const { allUsers, usersPaginado } = useSelector((state) => state);
  const [page, setPage] = useState(1);
  const [success, setSuccess] = useState(false);
  const [change, setChange] = useState(false);
  const [userModify, setUserModify] = useState("");
  const [message, setMessage] = useState("");
  const [color, setColor] = useState("");

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

  const handleAdmin = async (id, data) => {
    const bodyData = { admin: data };
    try {
      const data = await axios.put(
        `http://localhost:3001/user/${id}`,
        bodyData
      );
      setUserModify(id);

      setSuccess(true);
      setMessage("User Admin Modify!");
      setColor("success");
      setTimeout(() => {
        setSuccess(false);
        setChange(true);
      }, 1000);
      setTimeout(() => {
        setChange(false);
        setUserModify("");
        setMessage("");
        setColor("");
      }, 1800);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteItem = async (itemId) => {
    const resp = confirm(
      `You want to delete the movie with the id: ${itemId}?`
    );
    if (resp) {
      const resp = confirm(`¿you're sure?`);
      if (resp) {
        try {
          await axios.delete(`http://localhost:3001/user/${itemId}`);
          setSuccess(true);

          setMessage("User Admin Delete");
          setColor("danger");
          setTimeout(() => {
            setSuccess(false);
            setChange(true);
          }, 1000);
          setTimeout(() => {
            setMessage("");
            setColor("");

            setChange(false);
          }, 1800);
        } catch (error) {
          console.log(error);
        }
      } else {
        return;
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    dispatch(getUsers());
    split(page);
  }, [success]);

  useEffect(() => {
    dispatch(getUsers());
    setPage(1);
  }, []);

  return (
    <div className="bg-white" style={{ width: "81%", marginLeft: "auto" }}>
      {" "}
      <div style={{ height: "70px" }}>
        {success && <Spinner animation="border" />}
        {change && (
          <Alert variant={color} show={change}>
            <Alert.Heading>{message}</Alert.Heading>
          </Alert>
        )}
      </div>
      <Table striped hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>username</th>
            <th>id</th>

            <th>admin</th>
            <th>AdminUpdate</th>
            <th>DeleteUser</th>
          </tr>
        </thead>
        <tbody>
          {usersPaginado &&
            usersPaginado.map((e) => (
              <tr
                key={e.id}
                // style={userRegister.id === e.id ? { background: "#ccc" } : null}
                className={userModify === e.id && change && "bg-warning"}
              >
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td style={e.username !== "Guest" ? null : { color: "red" }}>
                  {e.username !== "Guest" ? e.username : "Guest"}
                </td>
                <td>{e.id}</td>
                <td>{e.admin ? "true" : "false"}</td>
                {userRegister.id !== e.id ? (
                  <>
                    <td>
                    {e.username !=="Guest"?
                    (<Button onClick={() => handleAdmin(e.id, !e.admin)}>
                        Up
                      </Button>) : ""}
                      
                    </td>
                    <td>
                      <Button onClick={() => deleteItem(e.id)}>Del</Button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>null</td>
                    <td>null</td>
                  </>
                )}
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
