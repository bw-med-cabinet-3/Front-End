// React
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Axios
import { axiosWithAuth } from '../utils/axiosWithAuth';
// Styling
import { Button, Form, FormGroup, Input } from 'reactstrap';


const Login = () => {
  // Set initial state for credentials, fetch check and error
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState('');

  // Set credentials to it's state
  const handleChanges = e => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
    console.log("NEW credentials from Login", credentials);
  };

  // POST credentials to local storage
  let history = useHistory();
  const login = e => {
    e.preventDefault();
    setIsFetching(true);

    axiosWithAuth()
      .post('/login', credentials)    // REPLACE THIS WITH LOGIN ENDPOINT
      .then(res => {
        console.log(res);
        if (res.data.token) {
          localStorage.setItem('token', res.data.token);
          history.push('/');   // REPLACE THIS WITH HOME COMPONENT
        } else {
          // setError(res.data.msg);    CHECK THIS
          setError('Your login was unsuccessful!');
        }
      })
      .catch(err => console.log(err));
  };


  return (
    <div className="login">
      <div className="login-cont">
        <h1>OH LOOK IT'S A LOGIN</h1>
        <Form inline onSubmit={login}>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input type="email" name="email" placeholder="Email" value={credentials.email} onChange={handleChanges} required />
          </FormGroup>
          <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
            <Input type="password" name="password" placeholder="Password" value={credentials.password} onChange={handleChanges} required />
          </FormGroup>
          <Button>Log in</Button>
        </Form>
        <p>{isFetching ? 'Loading...' : null}</p>
        <p>{error ? error : null}</p>
      </div>
    </div>
  );
};

export default Login;