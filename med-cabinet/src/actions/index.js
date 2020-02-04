// Axios
import { axiosWithAuth } from '../utils/axiosWithAuth';
// Destructuring command names
export const FETCH_STRAINS_START = "FETCH_STRAINS_START";
export const FETCH_STRAINS_SUCCESS = "FETCH_STRAINS_SUCCESS";
export const FETCH_STRAINS_FAILURE = "FETCH_STRAINS_FAILURE";


export const getStrains = () => {
  return dispatch => {
    dispatch({ type: FETCH_STRAINS_START });
    axiosWithAuth()
      .get("/freecompany/9229142273877456802?data=FCM")
      .then(res => {
        console.log(res.data);
        dispatch({ type: FETCH_STRAINS_SUCCESS, payload: res.data.FreeCompanyMembers });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: FETCH_STRAINS_FAILURE });  // set error to payload laters
      });
  };
};