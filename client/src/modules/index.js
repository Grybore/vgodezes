<<<<<<< HEAD
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cases from './cases';
import unbox from './unbox';
import keys from './keys';
import error from './error';
import auth from './auth';

export default combineReducers({
  routing: routerReducer,
  cases,
  unbox,
  auth,
  keys,
  error,
});
=======
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cases from './cases';
import unbox from './unbox';
import keys from './keys';
import error from './error';
import auth from './auth';

export default combineReducers({
  routing: routerReducer,
  cases,
  unbox,
  auth,
  keys,
  error,
});
>>>>>>> 0a276c0d594bd0ccc1910be31f0fc259c6319449
