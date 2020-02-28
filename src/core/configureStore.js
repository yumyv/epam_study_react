import {createStore} from 'redux';
import {rootReducer} from './rootReducer';

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
    devTools,
);
