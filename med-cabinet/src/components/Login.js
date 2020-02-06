// React
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Axios
import { axiosWithAuth } from '../utils/axiosWithAuth';
// Styling
import { Button, Form, FormGroup, Input } from 'reactstrap';
import styled from "styled-components";
//Import Particles-JS
import Particles from 'react-particles-js';


const Login = () => {

  //SETTING UP IBG
  const particleOpt = {
    "particles":{"number":{"value":80,"density":{"enable":true,"value_area":1000}},"color":{"value":"#80ffaa"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":.5,"random":false,"anim":{"enable":false,"speed":.5,"opacity_min":0.1,"sync":false}},"size":{"value":12,"random":true,"anim":{"enable":false,"speed":60,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":250,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":4,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
    "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":350,"line_linked":{"opacity":1}},
    "bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
    "retina_detect":true,
    "position": "absolute"

  }


  const Page = styled.div`
  width: 100%;
  height: 110vh;
  background: rgb(57,195,97);
  background: radial-gradient(circle, rgba(57,195,97,1) 0%, rgba(165,255,188,1) 100%);
  `;

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
      .post('/users/login', credentials)
      .then(res => {
        console.log(res);
        if (res.data.token) {
          // Set items to local storage
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('email', res.data.user.email);
          localStorage.setItem('password', credentials.password);
          localStorage.setItem('id', res.data.user.user_id);
          localStorage.setItem('message', res.data.message);
          history.push('/home');
        } else {
          // setError(res.data.msg);    CHECK THIS
          setError('Your login was unsuccessful!');
        }
      })
      .catch(err => console.log(err));
  };


  return (
    <Page>
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
    <Particles 
    params={ particleOpt }
     style={{
      "zIndex": "-1"
    }}
    />
    </Page>
  );
};

export default Login;