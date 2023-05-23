import React, { useState, useEffect } from "react";
import s from "./CreateGenre.module.css";
import { getGenres } from "../../redux/actions.js";
import { useDispatch } from "react-redux";
import axios from "axios";
import Sidebar from "../Admin/Sidebar";

import Alert from "react-bootstrap/Alert";

export const CreateGenre = () => {
  const dispatch = useDispatch();

  const [genre, setGenre] = useState("");
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);

  const isOnlyLetters = (text) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(text);
  };

  const InsertGenre = async (e) => {
    e.preventDefault();
    setGenre(e.target.value);

    if (isOnlyLetters(genre) && genre.length >= 20) {
      setErr("have to be only letters and length less or equal 20");
      console.log(genre.length);
      return;
    } else {
      console.log(genre.length);
      setErr("");
    }

    if (genre) {
      await axios.post(`http://localhost:3001/genre`, {
        name: genre,
      });
      setErr("");
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1400);
    } else {
      window.alert("Please fill the input correctly");
    }
  };
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch, success]);

  return (
    <div style={{ background: "white" }}>
      <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
        <Sidebar />
      </div>
      <div className={`${s.formContainer}`}>
        <form className={s["movie-form"]}>
          <div>
            <h2>CREATE GENRE</h2>
          </div>

          <div className={s["form-group"]}>
            <label htmlFor="genre">Name: </label>
            <input
              id="genre"
              type="text"
              value={genre}
              onChange={(event) => setGenre(event.target.value)}
            />
          </div>

          {err && <Alert variant="danger">{err}</Alert>}
          {success && (
            <Alert variant="success">Genero creado correctamente</Alert>
          )}
          <button
            type="submit"
            className={s["submit-button"]}
            onClick={InsertGenre}
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
};
