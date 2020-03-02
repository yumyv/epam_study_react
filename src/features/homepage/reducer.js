import {
  ADD_CURRENT_MOVIE,
  CHANGE_COUNT_OF_LIKES,
  CHANGE_COUNT_OF_STARS,
  FILTER_MOVIE,
  SET_BASIC_CONTENT, SORT_BY_LIKES, SORT_BY_RATING
} from './actionTypes';
import basicContent from '../../global/basicContent';

const initialState = {
  movies: null,
  currentMovie: null,
  sortedByLikesSwitcher: false,
  sortedByRatingSwitcher: false,
  filterWord: null,
};

const getBasicMovies = () => {
  return basicContent.movies;
};

export const homepageReducer = (state = initialState, action) => {
  const {type, payload} = action;

  const getCurrentMovies = () => {
    if (state.currentMovie) {
      return state.currentMovie.id === payload.id ?
          state.movies.find(movie => movie.id === payload.id) : state.currentMovie;
    } else {
      return null;
    }
  };

  switch (type) {
    case SET_BASIC_CONTENT:
      return {
        ...state,
        movies: getBasicMovies(),
      };
    case ADD_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: payload
      };
    case FILTER_MOVIE:
      return {
        ...state,
        filterWord: payload
      };
    case CHANGE_COUNT_OF_LIKES:
      const setNewLike = (prevValue) => {
        if (payload.event.toLowerCase() === 'plus') {
          return ++prevValue;
        } else if (payload.event.toLowerCase() === 'minus') {
          return --prevValue;
        } else {
          return prevValue;
        }
      };
      return {
        ...state,
        currentMovie: getCurrentMovies(),
        movies: state.movies.map((item) => {
          if (item.id === payload.id) {
            return {
              ...item,
              likes: setNewLike(item.likes)
            }
          }
          return item;
        })
      };
    case CHANGE_COUNT_OF_STARS:
      return {
        ...state,
        currentMovie: getCurrentMovies(),
        movies: state.movies.map((item) => {
          if (item.id === payload.id) {
            state.currentMovie = {
              ...item,
              stars: payload.countOfStars
            };
            return {
              ...item,
              stars: payload.countOfStars
            }
          }
          return item;
        }),
      };
    case SORT_BY_LIKES:
      if (state.sortedByLikesSwitcher) {
        return {
          ...state,
          movies: [...state.movies.sort((a, b) => a.likes > b.likes ? 1 : -1)],
          sortedByLikesSwitcher: !state.sortedByLikesSwitcher
        }
      } else {
        return {
          ...state,
          movies: [...state.movies.sort((a, b) => a.likes > b.likes ? -1 : 1)],
          sortedByLikesSwitcher: !state.sortedByLikesSwitcher
        }
      }
    case SORT_BY_RATING:
      if (state.sortedByRatingSwitcher) {
        return {
          ...state,
          movies: [...state.movies.sort((a, b) => a.stars > b.stars ? 1 : -1)],
          sortedByRatingSwitcher: !state.sortedByRatingSwitcher
        }
      } else {
        return {
          ...state,
          movies: [...state.movies.sort((a, b) => a.stars > b.stars ? -1 : 1)],
          sortedByRatingSwitcher: !state.sortedByRatingSwitcher
        }
      }
    default:
      return state;
  }
};
