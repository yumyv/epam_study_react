import {
  ADD_USER, INVALID_LOGIN,
  SET_LOGGED_IN,
  SET_LOGGED_OUT,
  USER_EXISTS,
  USER_NOT_REGISTERED,
  USER_REGISTERED
} from './actionTypes';
import {URLs} from '../../global/constants';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload
});

export const setLoggedIn = () => ({
  type: SET_LOGGED_IN,
});

export const setLoggedOut = () => ({
  type: SET_LOGGED_OUT,
});

export const userExists = () => ({
  type: USER_EXISTS,
});

export const userRegistered = () => ({
  type: USER_REGISTERED,
});

export const userNotRegistered = () => ({
  type: USER_NOT_REGISTERED,
});

export const invalidLogin = () => ({
  type: INVALID_LOGIN,
});

export const registerUser = (user) => (dispatch, _, api) => {
  const handleUser = (userForHandle) => {
    if (userForHandle) dispatch(userExists());
    else {
      api(URLs.USERS, 'post', user).then(() => {
        dispatch(addUser());
        dispatch(userRegistered());
      });
    }
  };

  api(URLs.USERS).then(res => handleUser(res.data.find(item => item.name === user.name)));
};

export const loginUser = (user) => (dispatch, _, api) => {
  const handleUser = (userForHandle) => {
    if (!userForHandle) dispatch(userNotRegistered());
    else {
      userForHandle.name === user.name && userForHandle.password === user.password ? dispatch(setLoggedIn()) : dispatch(invalidLogin());
    }
  };

  api(URLs.USERS).then(res => handleUser(res.data.find(item => item.name === user.name)));
};
