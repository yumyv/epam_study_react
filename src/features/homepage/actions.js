import {
  SET_BASIC_CONTENT,
  ADD_CURRENT_MOVIE,
  CHANGE_COUNT_OF_LIKES,
  CHANGE_COUNT_OF_STARS,
  FILTER_MOVIE, SORT_BY_LIKES, SORT_BY_RATING,
} from './actionTypes';

export const setBasicContent = () => ({
  type: SET_BASIC_CONTENT,
});

export const addCurrentMovie = (payload) => ({
  type: ADD_CURRENT_MOVIE,
  payload
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
