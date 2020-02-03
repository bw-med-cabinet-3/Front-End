// React
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Axios
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Register = () => {
  // Set initial state for credentials, fetch check and error
  const [credentials, setCredentials] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');

  // Set credentials to it's state
  const handleChanges = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log("NEW credentials from Registration component", credentials);
  };

  // POST credentials to local storage token
  let history = useHistory();
  const register = e => {
    e.preventDefault();
    setIsFetching(true);
    axiosWithAuth()
      .post('/register', credentials)
      .then(res => {
        console.log(res.data);
        history.push('/login');    // CHECK THIS TO MAKE SURE IT'S RIGHT ONCE ENDPOINTS ARE SET
      })
      .catch(err => console.log(err));
  };


  return (
    <div>
      <form onSubmit={register}>
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={credentials.first_name}
          onChange={handleChanges}
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={credentials.last_name}
          onChange={handleChanges}
          required
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={credentials.email}
          onChange={handleChanges}
          required
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChanges}
          required
        />
      </form>
      <button>Sign up</button>
      <p>{isFetching ? 'Loading...' : null}</p>
      <p>{error ? error : null}</p>
    </div>
  );
};

export default Register;