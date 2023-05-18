import React from "react";
import style from "./NewMovie.module.css";
import { useSelector } from "react-redux";
import Cards from "../cards/Cards";

function NewMovie() {
  const { movies } = useSelector((state) => state);

  const NewMovies = movies.slice(-8);

  return (
    <>
      <div className={style.body}>
        {NewMovies &&
          NewMovies.map((e) => (
            <Cards
              movies={e}
              price={e.price}
              format={e.Format.name}
              name={e.name}
              image={e.image}
              id={e.id}
              key={e.id}
              genres={e.genres}
            />
          ))}
      </div>
    </>
  );
}

export default NewMovie;
