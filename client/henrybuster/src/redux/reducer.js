import {
  GET_DETAIL,
  GET_MOVIES,
  GET_FORMAT,
  GET_GENRES,
  SPLIT_RECIPES,
  FILTER_BY_GENRES,
  FILTER_BY_FORMAT,
  GET_RANKING,
  FILTER_RANKING,
  GET_LANGUAGES,
  GET_MOVIES_ADMIN,
  SPLIT_RECIPES_ADMIN,
} from "./action-type";

const INITIAL_STATE = {
  detail: {},
  movies: [],
  moviesFilter: [],
  paginado: [],
  ratings: [],
  format: [],
  genres: [],
  languages: [],
  ratingsFilter: [],
  moviesAdmin: [],
  paginadoAdmin: [],
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

    case GET_LANGUAGES:
      return {
        ...state,
        languages: payload,
      };
    case GET_MOVIES:
      const results = payload.slice(0, 10);
      return {
        ...state,
        paginado: results,
        movies: payload,
        moviesFilter: payload,
      };
    case GET_MOVIES_ADMIN:
      const allResults = payload.slice(0, 10);
      return {
        ...state,
        paginadoAdmin: allResults,
        moviesAdmin: payload,
      };

    case SPLIT_RECIPES_ADMIN:
      const resultAdmin = state.moviesAdmin.slice(inicio, fin);
      return {
        ...state,
        paginadoAdmin: resultAdmin,
      };
    case SPLIT_RECIPES:
      const result = state.moviesFilter.slice(inicio, fin);
      return {
        ...state,
        paginado: result,
      };

    case GET_RANKING:
      return {
        ...state,
        ratings: payload,
        ratingsFilter: payload,
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

    case FILTER_RANKING:
      let ratingsFiltered = [...state.ratings];
      console.log(ratingsFiltered, "inicio");
      if (payload === "All") {
        ratingsFiltered = state.ratings;
        console.log(ratingsFiltered, "if all");
      } else {
        const rating = payload;
        console.log(rating, "nuemero que recibe");
        ratingsFiltered = ratingsFiltered.filter(
          (item) => item.rating === rating
        );
        console.log(ratingsFiltered, "despues de filtrar");
      }

      return {
        ...state,
        ratingsFilter: ratingsFiltered,
      };

      console.log(state.movies);
      if (state.movies.length > 1) {
      }
      const sortedMovies = state.movies.sort(
        (a, b) => b.vote_count - a.vote_count
      );
      console.log(sortedMovies);
      const top10Movies = sortedMovies.slice(0, 10);
      return {
        ...state,
        top: top10Movies,
      };

    default:
      return state;
  }
}
