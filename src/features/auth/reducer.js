import {
  ADD_USER, INVALID_LOGIN,
  SET_LOGGED_IN,
  SET_LOGGED_OUT,
  USER_EXISTS,
  USER_NOT_REGISTERED,
  USER_REGISTERED
} from './actionTypes';
import {InfoMessages} from '../../global/constants';

const initialState = {
  isLoggedIn: false,
  infoMessage: ''
};


export const authReducer = (state = initialState, action) => {
  const {type} = action;

  switch (type) {
    case ADD_USER:
      return {
        ...state,
        infoMessage: ''
      };
    case USER_EXISTS:
      return {
        ...state,
        infoMessage: InfoMessages.USER_EXISTS
      };
    case USER_REGISTERED:
      return {
        ...state,
        infoMessage: InfoMessages.USER_REGISTERED
      };
    case USER_NOT_REGISTERED:
      return {
        ...state,
        infoMessage: InfoMessages.USER_NOT_REGISTERED
      };
    case INVALID_LOGIN:
      return {
        ...state,
        infoMessage: InfoMessages.INVALID_LOGIN
      };
    case SET_LOGGED_IN:
      return {
        ...state,
        isLoggedIn: true,
        infoMessage: ''
      };
    case SET_LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};
