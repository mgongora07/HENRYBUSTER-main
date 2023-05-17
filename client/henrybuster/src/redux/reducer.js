// import { GET_DETAIL, GET_MOVIES, GET_RANKING, SPLIT_RECIPES } from "./action-type";

import {
  GET_DETAIL,
  GET_MOVIES,
  GET_FORMAT,
  GET_GENRES,
  SPLIT_RECIPES,
  FILTER_BY_GENRES,
  FILTER_BY_FORMAT,
  GET_RANKING,
} from "./action-type";

const INITIAL_STATE = {
  detail: {},
  movies: [],
  moviesFilter: [],
  paginado: [],
  ratings: [],
  format: [],
  genres: [],
};

export default function rootReducer(
  state = INITIAL_STATE,
  { type, payload, inicio, fin }
) {
  switch (type) {
    case GET_DETAIL:
      return {
        ...state,
        detail: payload,
      };
    case GET_MOVIES:
      const results = payload.slice(0, 10);
      return {
        ...state,
        paginado: results,
        movies: payload,
        moviesFilter: payload,
      };
    case SPLIT_RECIPES:
      const result = state.moviesFilter.slice(inicio, fin);
      return {
        ...state,
        paginado: result,
      };

    case GET_RANKING:
      console.log(payload, "reducer");
      return {
        ...state,
        ratings: payload,
      };

    case GET_FORMAT:
      return {
        ...state,
        format: payload,
      };

    case GET_GENRES:
      return {
        ...state,
        genres: payload,
      };

    case FILTER_BY_GENRES:
      console.log(payload);
      if (payload === "All-Genres") {
        return {
          ...state,
          moviesFilter: state.movies,
          paginado: state.movies,
        };
      } else {
        const data = state.movies.filter((movie) =>
          movie.Genres.some((genre) => genre.name === payload)
        );
        console.log(data);
        return {
          ...state,
          paginado: data,
          moviesFilter: data,
        };
      }
    case FILTER_BY_FORMAT:
      console.log(payload);
      if (payload === "All-Format") {
        return {
          ...state,
          moviesFilter: state.movies,
          paginado: state.movies,
        };
      } else {
        const data = state.movies.filter(
          (movie) => movie.Format.name === payload
        );
        console.log(data);
        return {
          ...state,
          paginado: data,
          moviesFilter: data,
        };
      }

    default:
      return state;
  }
}
