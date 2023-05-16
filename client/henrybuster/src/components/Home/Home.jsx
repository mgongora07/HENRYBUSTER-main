import React, { useEffect, useState } from "react";
import style from "../Styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, splitRecipes } from "../../redux/actions";

import Cards from "./cards/Cards";
import Paginado from "./paginado/Paginado";

export const Home = () => {
  const dispatch = useDispatch();
  const { paginado, moviesFilter } = useSelector((state) => state);

  let pages = moviesFilter
    .slice(0, Math.ceil(moviesFilter.length / 10))
    .map((recipe, index) => index + 1);

  const split = (num) => {
    if (num === 1) {
      dispatch(splitRecipes(0, 10));
    } else {
      const inicio = num * 10 - 10;
      const fin = num * 10;
      dispatch(splitRecipes(inicio, fin));
    }
  };

  useEffect(() => {
    dispatch(getMovies());
  }, []);

  return (
    <>
      <div className={style.body}>
        {paginado &&
          paginado.map((e) => (
            <Cards
              name={e.name}
              image={e.image}
              id={e.id}
              key={e.id}
              genres={e.genres}
            />
          ))}
      </div>
      <Paginado pages={pages} split={split} />
    </>
  );
};