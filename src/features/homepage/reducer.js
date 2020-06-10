import {
  FILTER_MOVIE,
  SORT_BY_LIKES,
  SORT_BY_RATING,
  DELETE_MOVIE,
  UPDATE_MOVIE,
  MOVIES_LOADED,
  ACTORS_LOADED,
  LOCALIZATION,
  SET_LANGUAGE
} from './actionTypes';

const initialState = {
  movies: null,
  sortedByLikesSwitcher: false,
  sortedByRatingSwitcher: false,
  filterWord: null,
  actors: null,
  localization: 'en',
  language: null
};

export const homepageReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case MOVIES_LOADED:
      return {
        ...state,
        movies: payload
      };
    case ACTORS_LOADED:
      return {
        ...state,
        actors: payload
      };
    case DELETE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter(item => item.id !== payload)
      };
    case UPDATE_MOVIE:
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
    case LOCALIZATION:
      if (payload === 'en') {
        return {
          ...state,
          localization: 'en'
        }
      } else if (payload === 'ua') {
        return {
          ...state,
          localization: 'ua'
        }
      } else {
        return {
          ...state
        };
      }
    case SET_LANGUAGE:
      return {
        ...state,
        language: payload
      };
    default:
      return state;
  }
};
