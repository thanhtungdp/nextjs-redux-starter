import {AWAIT_MARKER} from 'redux-await';
import MovieApi from 'api/MovieApi';

export const GET_MOVIE = 'MOVIE/get-movie';
export const GET_MOVIES = 'MOVIE/get-movies';

export function getMovie(id){
	return {
		type: GET_MOVIE,
		AWAIT_MARKER,
		payload: {
			getMovie: MovieApi.getMovie(id)
		}
	}
}

export function getMovies() {
	return {
		type: GET_MOVIES,
		AWAIT_MARKER,
		payload:{
			getMovies: MovieApi.getMovies()
		}
	}
}