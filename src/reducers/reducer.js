import { REMOVE_MOVIE } from "../actions/action";
import {
  RECIEVE_MOVIE,
  LIKE_MOVIE,
  MOVIE_BY_CATEGROY,
} from "../actions/action";
const initialState = {};
const movieReducer = (state = initialState, action) => {
  console.log("state here,", state, action);
  switch (action.type) {
    case REMOVE_MOVIE:
      const new1 = state.movies.map((f) => {
        if (f.id != action.movies.data.id) {
          return f;
        }
      });

      console.log(new1, "new");

      const updateMovie = state.movies.filter(
        (item) => item.id != action.movies.data.id
      );

      return {
        ...state,
        movies: updateMovie,
      };

    case LIKE_MOVIE:
      const n = state.movies.map((f) => {
        if (f.id == action.movies.data.id) {
          f.likes = action.movies.data.likes;
        }
        return f;
      });

      return {
        ...state,
        movies: n,
      };

    case RECIEVE_MOVIE:
      return {
        ...state,
        ...action.moviesss,
      };

    case MOVIE_BY_CATEGROY:
      const movies1 = [];
      console.log(state, "state");
      console.log(action, "action");

      state.movies.map((f) => {
        if (f.category === action.movies) movies1.push(f);
        return f;
      });
      return {
        ...state,
        movies: movies1,
        // isdata: "yessss"
      };

    default:
      return state;
  }
};

export default movieReducer;
