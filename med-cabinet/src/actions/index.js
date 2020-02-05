// Axios
import { axiosWithAuth } from '../utils/axiosWithAuth';
// Destructuring command names
// GET strains data
export const FETCH_STRAINS_START = "FETCH_STRAINS_START";
export const FETCH_STRAINS_SUCCESS = "FETCH_STRAINS_SUCCESS";
export const FETCH_STRAINS_FAILURE = "FETCH_STRAINS_FAILURE";
// GET user data
export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";


// GET an array of strain data
export const getStrains = () => {
  return dispatch => {
    dispatch({ type: FETCH_STRAINS_START });
    axiosWithAuth()
      .get("/strains")
      .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_STRAINS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_STRAINS_FAILURE });  // set error to payload laters
      });
  };
};

// GET user data
export const getUser = () => {
  return dispatch => {
    dispatch({ type: FETCH_USER_START });
    axiosWithAuth()
      .get("/PLACEHOLDERUSERGETENDPOINT")
      .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_USER_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_USER_FAILURE });  // set error to payload laters
      });
  };
};