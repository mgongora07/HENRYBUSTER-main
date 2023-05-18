import { useEffect, useState } from "react";
import style from "../Styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovies,
  splitRecipes,
  getFormats,
  getGenres,
} from "../../redux/actions";

import Button from "react-bootstrap/Button";

import Cards from "./cards/Cards";
import Paginado from "./paginado/Paginado";
import FilterMovies from "./Filter/FilterMovies";
import CarouselFadeExample from "./carrusel/CarruselComponent";

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
    dispatch(getFormats());
    dispatch(getGenres());
  }, []);

  return (
    <>
      <div className={style.bodyHome}>
        <CarouselFadeExample className={style.carrusel} />

        <FilterMovies split={split} />

        <Paginado pages={pages} split={split} />
        <div className={style.body}>
          {paginado &&
            paginado.map((e) => (
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
        <Paginado pages={pages} split={split} />
      </div>
    </>
  );
};
