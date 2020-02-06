import { combineReducers } from 'redux';
import { strainReducer } from './strainReducer';
// import { searchReducer } from './searchReducer';

export const rootReducer = combineReducers({
  strainReducer,
  // searchReducer
});