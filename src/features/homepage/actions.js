import {
  SET_BASIC_CONTENT,
  CHANGE_COUNT_OF_LIKES,
  CHANGE_COUNT_OF_STARS,
  FILTER_MOVIE, SORT_BY_LIKES, SORT_BY_RATING, DELETE_MOVIE, EDIT_MOVIE,
} from './actionTypes';

export const setBasicContent = () => ({
  type: SET_BASIC_CONTENT,
});

export const changeCountOfLikes = (payload) => ({
  type: CHANGE_COUNT_OF_LIKES,
  payload
});

export const changeCountOfStars = (payload) => ({
  type: CHANGE_COUNT_OF_STARS,
  payload
});

export const filterMovies = (payload) => ({
  type: FILTER_MOVIE,
  payload
});

export const sortByLikes = () => ({
  type: SORT_BY_LIKES
});

export const sortByRating = () => ({
  type: SORT_BY_RATING
});

export const deleteMovie = (payload) => ({
  type: DELETE_MOVIE,
  payload
});

export const editMovie = (payload) => ({
  type: EDIT_MOVIE,
  payload
});
