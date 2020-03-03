import {
  CHANGE_COUNT_OF_LIKES,
  CHANGE_COUNT_OF_STARS,
  FILTER_MOVIE,
  SET_BASIC_CONTENT, SORT_BY_LIKES, SORT_BY_RATING, DELETE_MOVIE, EDIT_MOVIE
} from './actionTypes';
import basicContent from '../../global/basicContent';

const initialState = {
  movies: null,
  sortedByLikesSwitcher: false,
  sortedByRatingSwitcher: false,
  filterWord: null,
  actors: null
};

const getBasicMovies = () => {
  return basicContent.movies;
};

const getBasicActors = () => {
  return basicContent.actors;
};

export const homepageReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case SET_BASIC_CONTENT:
      return {
        ...state,
        movies: getBasicMovies(),
        actors: getBasicActors()
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(item => item.id !== payload)
      };
    case EDIT_MOVIE:
      return {
        ...state,
        movies: state.movies.map(item => {
          return item.id === payload.id ? {...payload} : {...item};
        })
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
        movies: state.movies.map((item) => {
          return item.id === payload.id ? {...item, likes: setNewLike(item.likes)} : {...item};
        })
      };
    case CHANGE_COUNT_OF_STARS:
      return {
        ...state,
        movies: state.movies.map((item) => {
          return item.id === payload.id?{...item, stars: payload.countOfStars}:{...item};
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
