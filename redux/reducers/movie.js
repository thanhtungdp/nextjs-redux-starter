import { CHANGE_TITLE } from "../actions/movieActions";

const initialState = {
  title: "Phim hay qua"
};

export default function createReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TITLE:
      return changeTitle(state, action);
    default:
      return state;
  }
}

export function changeTitle(state, { title }) {
  return {
    ...state,
    title
  };
}
