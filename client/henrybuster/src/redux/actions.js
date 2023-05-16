import { GET_DETAIL, GET_MOVIES, SPLIT_RECIPES } from "./action-type";
import axios from "axios";

export const getDetailMovie = (id) => {
  return async function (dispatch) {
    try {
      let movie = await axios.get(`http://localhost:3001/movie/${id}`);
      let payload = movie.data;

      return dispatch({
        type: GET_DETAIL,
        payload: payload,
      });
    } catch (error) {
      return { error: error };
    }
  };
};

export const cleanDetail = () => {
  return function (dispatch) {
    try {
      let clean = {};

      return dispatch({
        type: GET_DETAIL,
        payload: clean,
      });
    } catch (error) {
      return { error: error };
    }
  };
};

export const getMovies = () => {
  return async function (dispatch) {
    try {
      let movie = await axios.get(`http://localhost:3001/movies`);
      let payload = movie.data;

      return dispatch({
        type: GET_MOVIES,
        payload: payload,
      });
    } catch (error) {
      return { error: error };
    }
  };
};

export function splitRecipes(inicio, fin) {
  return async (dispatch) => {
    dispatch({
      type: SPLIT_RECIPES,
      inicio,
      fin,
    });
  };
}
