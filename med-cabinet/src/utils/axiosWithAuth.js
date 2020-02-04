// Axios
import axios from 'axios';


export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://xivapi.com',
    headers: {
      authorization: token
    }
  });
};