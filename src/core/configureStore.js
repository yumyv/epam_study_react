import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './rootReducer';
import api from './api';

let devTools = f => f;

const enableReduxDevTools = process.browser
    && process.env.NODE_ENV !== 'production'
    && window.__REDUX_DEVTOOLS_EXTENSION__;

if (enableReduxDevTools) {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__();
}

export const configureStore = (initialState = {}) => createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        devTools
    )
);
