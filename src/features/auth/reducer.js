import {ADD_USER, SET_LOGGED_IN, SET_LOGGED_OUT, SET_USERS} from './actionTypes';

const initialState = {
  users: [],
  isLoggedIn: false
};

const getRegisteredUsers = () => {
  const users = JSON.parse(window.localStorage.getItem('users'));
  return users?users:[];
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

export const authReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case ADD_USER:
      const user = state.users.find(user => user.name === payload.name);
      if (user) {
        return {
          ...state
        }
      } else {
        const users = state.users;
        users.push(payload);
        addUser(payload);
        return {
          ...state,
          users: users
        }
      }
    case SET_USERS:
      return {
        ...state,
        users: getRegisteredUsers()
      };
    case SET_LOGGED_IN:
      const loggedInUser = state.users.find(
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
