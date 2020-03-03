import {combineReducers} from 'redux';
import {homepageReducer} from '../features/homepage/reducer';
import {authReducer} from '../features/auth/reducer';

export const rootReducer = combineReducers({
  homepageReducer,
  authReducer
});
