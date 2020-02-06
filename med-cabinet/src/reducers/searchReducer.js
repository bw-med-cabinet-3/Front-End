import {
  SEARCH_STRAINS_START,
  SEARCH_STRAINS_SUCCESS,
  SEARCH_STRAINS_FAILURE
} from '../actions';
// Initial state setup
const initialState = {
  user: [],
  error: '',
  isFetching: false
};


export function userReducer(state=initialState, action) {
  switch (action.type) {
    case SEARCH_STRAINS_START:
      return {
        ...state,
        error: '',
        isFetching: true
      };
    case SEARCH_STRAINS_SUCCESS:
      console.log(state);
      return {
        ...state,
        error: '',
        isFetching: false,
        user: action.payload
      };
    case SEARCH_STRAINS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    default:
      return state;
  };
};