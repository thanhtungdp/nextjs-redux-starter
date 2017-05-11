import { AWAIT_MARKER } from "redux-await";
import MovieApi from "api/MovieApi";
import payload from "constants/payload";

export const GET_MOVIE = "MOVIE/get-movie";
export const GET_MOVIES = "MOVIE/get-movies";

export function getMovie(id) {
  return {
    type: GET_MOVIE,
    AWAIT_MARKER,
    payload: {
      [payload.GET_MOVIE]: MovieApi.getMovie(id)
    }
  };
}

export function getMovies() {
  return {
    type: GET_MOVIES,
    AWAIT_MARKER,
    payload: {
      [payload.GET_MOVIES]: MovieApi.getMovies()
    }
  };
}
