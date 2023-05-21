import React, { useState, useEffect } from "react";
import s from "./CreateGenre.module.css";
import { getGenres } from "../../redux/actions.js";
import { useDispatch } from "react-redux";
import axios from "axios";
import Sidebar from "../Admin/Sidebar";


export const CreateGenre = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const [genre, setGenre] = useState("");
  const [err, setErr] = useState("");


  const isOnlyLetters = (text) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(text);
  };

  const InsertGenre = async (e) => {
    e.preventDefault();
    if(isOnlyLetters(genre) && genre.length<=20){
        setErr("")
    }else{
        setErr("have to be only letters and length less or equal 20")
    }


    if (genre && !err) {
      await axios.post(`http://localhost:3001/genre`, {
        name: genre,
      });

      window.alert("Genre created");
    } else {
      window.alert("Please fill the input correctly");
    }
  };

  return (
    <div>
      <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
        <Sidebar />
      </div>
    <div className={`${s.formContainer}`}>
      <form className={s['movie-form']}>
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

        <div className={s["form-group"]}>
          <span>{err}</span>
        </div>

        <button type="submit" className={s["submit-button"]} onClick={InsertGenre}>
          Add
        </button>
      </form>
    </div>
    </div>
  );
};