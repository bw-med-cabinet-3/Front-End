// Axios
import axios from 'axios';


export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'http://strainapi.evanbusse.com/ENWSyX8',
    headers: {
      authorization: token
    }
  });
};