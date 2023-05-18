import {
  GET_DETAIL,
  GET_MOVIES,
  GET_FORMAT,
  GET_GENRES,
  SPLIT_RECIPES,
  FILTER_BY_FORMAT,
  FILTER_BY_GENRES,
  GET_RANKING,
  FILTER_RANKING,
  CREATE_MOVIE,
} from "./action-type";

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

// funciones en el home
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


export const getRankingMovie = (id) => {
  return async function (dispatch) {
    try {
      let ratings = await axios.get(`http://localhost:3001/rating/${id}`);

      let payload = ratings.data
     
      return dispatch({
        type: GET_RANKING,
        payload: payload,
      });
    } catch (error) {
      return { error: error };
    }
  };
};

export const cleanRatings = () => {
  return function (dispatch) {
    try {
      let clean = [];

      return dispatch({
        type: GET_RANKING,
        payload: clean,
      });
    } catch (error) {
      return { error: error };
    }
  };
};

export function getFormats() {
  return async (dispatch) => {
    const resp = await axios(`http://localhost:3001/formats`);
    dispatch({
      type: GET_FORMAT,
      payload: resp.data,
    });
  };
}
export function getGenres() {
  return async (dispatch) => {
    const resp = await axios(`http://localhost:3001/genres`);
    dispatch({
      type: GET_GENRES,
      payload: resp.data,
    });
  };
}

export function filterByGenres(filtro) {
  return {
    type: FILTER_BY_GENRES,
    payload: filtro,
  };
}
export function filterByFormat(filtro) {
  return {
    type: FILTER_BY_FORMAT,
    payload: filtro,
  };
}

export function filterRatingStar(order) {
  console.log(order, 'orden del action')
  return {
    type: FILTER_RANKING,
    payload: order,
  };
}


export const postNewMovie = (newMovie)=>{
  return async function(dispatch){
      try {
           await axios.post(`http://localhost:3001/movie`, newMovie)

           alert(`Successfully added to inventory`);
          
          return (dispatch({
              type: CREATE_MOVIE,
              }
              ))
          
      } catch (error) {
          alert(`Failed to create item`);
          return {error: error}
      }
  }
}