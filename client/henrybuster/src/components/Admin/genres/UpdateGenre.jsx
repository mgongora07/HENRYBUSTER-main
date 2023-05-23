import React, { useState } from "react";
import axios from "axios";
import s from "./up.module.css";
import { useParams } from "react-router";
import Sidebar from "../Sidebar";

import Alert from "react-bootstrap/Alert";
import { getGenres } from "../../../redux/actions";
import { useDispatch } from "react-redux";

function UpdateGenre() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const [idValue, name] = id.split("-");
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const isOnlyLetters = (text) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(text);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isOnlyLetters(value) || value.length >= 20) {
      setError("have to be only letters and length less or equal 20");
      return;
    } else {
      setError("");
    }

    try {
      await axios.put(`http://localhost:3001/genre/${idValue}`, {
        name: value,
      });
      dispatch(getGenres());
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1400);
    } catch (error) {}
  };

  return (
    <div style={{ background: "white" }}>
      <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
        <Sidebar />
      </div>
      <div className={`${s.formContainer}`}>
        <form className={s["movie-form"]}>
          <div>
            <h2>UPDATE GENRE: {name}</h2>
          </div>

          <div className={s["form-group"]}>
            <label htmlFor="genre">New Name: </label>
            <input
              id="genre"
              type="text"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
          </div>

          {error && <Alert variant="danger">{error}</Alert>}
          {success && (
            <Alert variant="success">Gender updated successfully</Alert>
          )}
          <button
            type="submit"
            className={s["submit-button"]}
            onClick={handleSubmit}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateGenre;
