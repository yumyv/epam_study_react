import {ADD_USER, SET_LOGGED_IN, SET_LOGGED_OUT} from './actionTypes';

const initialState = {
  isLoggedIn: false,
};

const addUser = (user) => {
  let users = JSON.parse(window.localStorage.getItem('users'));
  if (users) users.push(user);
  else {
    users = [];
    users.push(user);
  }
  window.localStorage.setItem('users', JSON.stringify(users));
};

const getUsers = () => {
  let users = JSON.parse(window.localStorage.getItem('users'));
  return users?users:[];
};

export const authReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_USER:
      const user = getUsers().find(user => user.name === payload.name);
      if (user) {
        return {
          ...state
        }
      } else {
        addUser(payload);
        return {
          ...state,
        }
      }
    case SET_LOGGED_IN:
      const loggedInUser = getUsers().find(
          user => user.name === payload.name && user.password === payload.password
      );
      return loggedInUser?{...state, isLoggedIn: true}:{...state};
    case SET_LOGGED_OUT:
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};
