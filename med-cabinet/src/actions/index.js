// Axios
import { axiosWithAuth } from '../utils/axiosWithAuth';
// Destructuring command names
// GET strains list
export const FETCH_STRAINS_START = "FETCH_STRAINS_START";
export const FETCH_STRAINS_SUCCESS = "FETCH_STRAINS_SUCCESS";
export const FETCH_STRAINS_FAILURE = "FETCH_STRAINS_FAILURE";
// GET saved strains list
export const FETCH_SAVED_STRAINS_START = "FETCH_SAVED_STRAINS_START";
export const FETCH_SAVED_STRAINS_SUCCESS = "FETCH_SAVED_STRAINS_SUCCESS";
export const FETCH_SAVED_STRAINS_FAILURE = "FETCH_SAVED_STRAINS_FAILURE";


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

// GET saved strains list
export const getSavedStrains = () => {
  return dispatch => {
    dispatch({ type: FETCH_SAVED_STRAINS_START });
    axiosWithAuth()
      .get(`/users/${localStorage.id}/strains`)
      .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_SAVED_STRAINS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_SAVED_STRAINS_FAILURE });  // set error to payload laters
      });
  };
};