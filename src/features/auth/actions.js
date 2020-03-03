import {ADD_USER, SET_LOGGED_IN, SET_LOGGED_OUT, SET_USERS} from './actionTypes';

export const addUser = (payload) => ({
  type: ADD_USER,
  payload
});

export const setUsers = () => ({
  type: SET_USERS,
});

export const setLoggedIn = (payload) => ({
  type: SET_LOGGED_IN,
  payload
});

export const setLoggedOut = () => ({
  type: SET_LOGGED_OUT,
});
