// Axios
import axios from 'axios';


export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');
  const email = localStorage.getItem('email');
  const password = localStorage.getItem('password');

  return axios.create({
    baseURL: 'https://strains-backend.herokuapp.com/api',
    headers: {
      authorization: token,
      email: email,
      password: password
    }
  });
};