import {
  FILTER_MOVIE, SORT_BY_LIKES, SORT_BY_RATING, DELETE_MOVIE, MOVIES_LOADED, ACTORS_LOADED, UPDATE_MOVIE,
} from './actionTypes';
import {URLs} from '../../global/constants'

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

export const updateMovie = (payload) => ({
  type: UPDATE_MOVIE,
  payload
});

export const moviesLoaded = (payload) => ({
  type: MOVIES_LOADED,
  payload
});

export const actorsLoaded = (payload) => ({
  type: ACTORS_LOADED,
  payload
});

export const fetchMovies = () => async (dispatch, _, api) => {
  const {data} = await api(URLs.MOVIES);
  dispatch(moviesLoaded(data));
};

export const fetchActors = () => async (dispatch, _, api) => {
  const {data} = await api(URLs.ACTORS);
  dispatch(actorsLoaded(data));
};

export const removeMovie = (id) => (dispatch, _, api) => {
  api(`${URLs.MOVIES}${id}`, 'delete').then(() => dispatch(deleteMovie(id)));
};

export const editMovie = (movie) => async (dispatch, _, api) => {
  const {data} = await api(`${URLs.MOVIES}${movie.id}`, 'put', movie);
  dispatch(updateMovie(data));
};

export const updateLikes = ({movie, event}) => (dispatch, _, api) => {
  if (event === 'plus') {
    movie.likes += 1;
    api(`${URLs.MOVIES}${movie.id}`, 'put', movie).then(({data}) => dispatch(updateMovie(data)));
  } else if (event === 'minus') {
    movie.likes -= 1;
    api(`${URLs.MOVIES}${movie.id}`, 'put', movie).then(({data}) => dispatch(updateMovie(data)));
  }
};

export const updateStars = ({movie, countOfStars}) => async (dispatch, _, api) => {
  movie.stars = countOfStars;
  const {data} = await api(`${URLs.MOVIES}${movie.id}`, 'put', movie);
  dispatch(updateMovie(data));
};
