import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
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
  const [showModal, setShowModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState(null);

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

  const handleDeleteItem = async (itemId) => {
    setShowModal(true);
    setUserIdToDelete(itemId);
  };

  const confirmDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/user/${userIdToDelete}`);
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

    setShowModal(false);
    setUserIdToDelete(null);
  };

  const closeModal = () => {
    setShowModal(false);
    setUserIdToDelete(null);
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
                      {e.username !== "Guest" ? (
                        <Button
                          className="btn btn-primary"
                          onClick={() => handleAdmin(e.id, !e.admin)}
                        >
                          Up
                        </Button>
                      ) : null}
                    </td>
                    <td>
                      <Button
                        className="btn btn-danger"
                        onClick={() => handleDeleteItem(e.id)}
                      >
                        Del
                      </Button>
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
        >
          <Pagination.Prev
            disabled={page === 1 ? true : false}
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
                split(page - 1);
              }
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

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Are you sure you want to delete the user with the ID:{" "}
            {userIdToDelete}?
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>

  );
}

export default Users;