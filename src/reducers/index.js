import { combineReducers } from 'redux';
import nav from './nav/reducer';
import AuthReducers from './AuthReducers';

const reducer = combineReducers({
  nav, AuthReducers
});

export default reducer;