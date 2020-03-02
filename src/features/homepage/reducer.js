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
  filteredMovies: null,
};

const getBasicMovies = () => {
  return basicContent.movies;
};

export const homepageReducer = (state = initialState, action) => {
  const {type, payload} = action;

  const getCurrentMovies = () => {
    if (state.currentMovie) {
      return state.currentMovie.id === payload.movie.id ?
          state.movies.find(movie => movie.id === payload.movie.id) : state.currentMovie;
    } else {
      return null;
    }
  };

  switch (type) {
    case SET_BASIC_CONTENT:
      return {
        ...state,
        movies: getBasicMovies(),
        filteredMovies: getBasicMovies(),
      };
    case ADD_CURRENT_MOVIE:
      return {
        ...state,
        currentMovie: payload
      };
    case FILTER_MOVIE:
      return payload ? {
            ...state,
            filteredMovies: state.movies.filter((movie) => movie.title.toLowerCase() === payload.toLowerCase())
          } :
          {...state, filteredMovies: state.movies};
    case CHANGE_COUNT_OF_LIKES:
      if (payload.event.toLowerCase() === 'plus') {
        return {
          ...state,
          currentMovie: getCurrentMovies(),
          movies: state.movies.map((item) => {
            if (item.id === payload.movie.id) {
              return {
                ...item,
                likes: ++item.likes
              }
            }
            return item;
          }),
          filteredMovies: state.filteredMovies.map((item) => {
            if (item.id === payload.movie.id) {
              return {
                ...item,
                likes: ++item.likes
              }
            }
            return item;
          })
        }
      } else if (payload.event.toLowerCase() === 'minus') {
        return {
          ...state,
          currentMovie: getCurrentMovies(),
          movies: state.movies.map((item) => {
            if (item.id === payload.movie.id) {
              return {
                ...item,
                likes: --item.likes
              }
            }
            return item;
          }),
          filteredMovies: state.filteredMovies.map((item) => {
            if (item.id === payload.movie.id) {
              return {
                ...item,
                likes: --item.likes
              }
            }
            return item;
          })
        }
      } else {
        return {...state};
      }
    case CHANGE_COUNT_OF_STARS:
      return {
        ...state,
        currentMovie: getCurrentMovies(),
        movies: state.movies.map((item) => {
          if (item.id === payload.movie.id) {
            return {
              ...item,
              stars: payload.countOfStars
            }
          }
          return item;
        }),
        filteredMovies: state.filteredMovies.map((item) => {
          if (item.id === payload.movie.id) {
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
          filteredMovies: [...state.filteredMovies.sort((a, b) => a.likes > b.likes ? 1 : -1)],
          sortedByLikesSwitcher: !state.sortedByLikesSwitcher
        }
      } else {
        return {
          ...state,
          filteredMovies: [...state.filteredMovies.sort((a, b) => a.likes > b.likes ? -1 : 1)],
          sortedByLikesSwitcher: !state.sortedByLikesSwitcher
        }
      }
    case SORT_BY_RATING:
      if (state.sortedByRatingSwitcher) {
        return {
          ...state,
          filteredMovies: [...state.filteredMovies.sort((a, b) => a.stars > b.stars ? 1 : -1)],
          sortedByRatingSwitcher: !state.sortedByRatingSwitcher
        }
      } else {
        return {
          ...state,
          filteredMovies: [...state.filteredMovies.sort((a, b) => a.stars > b.stars ? -1 : 1)],
          sortedByRatingSwitcher: !state.sortedByRatingSwitcher
        }
      }
    default:
      return state;
  }
};
