import { GET_DETAIL, GET_MOVIES, GET_RANKING, SPLIT_RECIPES } from "./action-type";

const INITIAL_STATE = {
  detail: {},
  movies: [],
  moviesFilter: [],
  paginado: [],
  ratings: [],
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
        console.log(payload, "reducer")
      return {
        ...state,
        ratings: payload,
      };
    default:
      return state;
  }
}
