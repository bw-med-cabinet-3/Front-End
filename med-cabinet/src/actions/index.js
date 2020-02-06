// Axios
import { axiosWithAuth } from '../utils/axiosWithAuth';
// Destructuring command names
// GET strains data
export const FETCH_STRAINS_START = "FETCH_STRAINS_START";
export const FETCH_STRAINS_SUCCESS = "FETCH_STRAINS_SUCCESS";
export const FETCH_STRAINS_FAILURE = "FETCH_STRAINS_FAILURE";
// GET user data
export const SEARCH_STRAINS_START = "SEARCH_STRAINS_START";
export const SEARCH_STRAINS_SUCCESS = "SEARCH_STRAINS_SUCCESS";
export const SEARCH_STRAINS_FAILURE = "SEARCH_STRAINS_FAILURE";


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

// // GET strain data then implement search functionality
// export const searchStrains = () => {
//   return dispatch => {
//     dispatch({ type: SEARCH_STRAINS_START });
//     axiosWithAuth()
//       .get("/strains")
//       .then(res => {
//         console.log(res.data);
//         dispatch({ type: SEARCH_STRAINS_SUCCESS, payload: res.data });
//         const strainSearch = res.data.filter(item => {
//           item.strain_name.toLowerCase().includes()
//         })
//       })
//       .catch(err => {
//         console.log(err);
//         dispatch({ type: SEARCH_STRAINS_FAILURE });  // set error to payload laters
//       });
//   };
// };