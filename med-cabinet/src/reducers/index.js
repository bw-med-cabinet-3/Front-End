import { combineReducers } from 'redux';
import { strainReducer } from './strainReducer';
import { savedStrainsReducer } from './savedStrainsReducer';

export const rootReducer = combineReducers({
  strainReducer,
  savedStrainsReducer
});