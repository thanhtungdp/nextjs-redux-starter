import { GET_MOVIE, GET_MOVIES } from "../actions/movieActions";

const initialState = {
  lists: [],
  current: {}
};

export default function createReducer(state = initialState, action) {
  switch (action.type) {
    case GET_MOVIES:
      return getMovies(state, action);
    case GET_MOVIE:
      return getMovie(state, action);
    default:
      return state;
  }
}

export function getMovie(state, action ) {
	return {
		...state,
		current: action.payload.getMovie
	};
}

export function getMovies(state, action ) {
  return {
    ...state,
    lists: action.payload.getMovies.Search
  };
}
