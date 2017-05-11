import { getFetch } from "../utils/fetch";

export function getMovies() {
  return getFetch("http://www.omdbapi.com/?s=batman");
}

export function getMovie(id) {
  return getFetch(`http://www.omdbapi.com/?i=${id}`);
}

export default {
	getMovies,
	getMovie
}