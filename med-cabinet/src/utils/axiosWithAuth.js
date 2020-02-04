// Axios
import axios from 'axios';


export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://med-cabinet-web25.herokuapp.com/api',
    headers: {
      authorization: token
    }
  });
};