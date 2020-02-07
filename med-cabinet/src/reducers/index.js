import { combineReducers } from 'redux';
import { strainReducer } from './strainReducer';
import { savedStrainsReducer } from './savedStrainsReducer';
import { findStrainReducer } from './findStrainReducer';

export const rootReducer = combineReducers({
  strainReducer,
  savedStrainsReducer,
  findStrainReducer
});