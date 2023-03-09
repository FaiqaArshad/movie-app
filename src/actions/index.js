import { REMOVE_MOVIE } from "./action";
import {
  RECIEVE_MOVIE,
  LIKE_MOVIE,
  DISLIKE_MOVIE,
  MOVIE_BY_CATEGROY,
} from "./action";
import { getInitialData } from "../data/movies";

export const recieveMovie = (movies) => {
  console.log(movies);

  return {
    type: RECIEVE_MOVIE,
    moviesss: movies,
  };
};

export const removeMovie = (movies) => {
  console.log(movies);

  return {
    type: REMOVE_MOVIE,
    movies,
  };
};

export const likeMovie = (movies) => {
  console.log(movies);

  return {
    type: LIKE_MOVIE,
    movies,
  };
};
export const dislikeMovie = (movies) => {
  console.log(movies);

  return {
    type: DISLIKE_MOVIE,
    movies,
  };
};
export const movieByCategory = (movies) => {
  console.log(movies);

  return {
    type: MOVIE_BY_CATEGROY,
    movies,
  };
};

export function handleInitialData() {
  return async (dispatch) => {
    return await getInitialData().then(({ movies }) => {
      dispatch(recieveMovie({ movies }));
    });
  };
}
