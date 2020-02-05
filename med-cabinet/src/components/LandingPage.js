// React
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";


const LandingPage = () => {
  let history = useHistory();
  
  //Button Paths
  const toLogin = () => {
    history.push('/login');
  }

  const toRegister = () => {
    history.push('/register');
  }

  //

  return (
    <div>
      <Login onClick={toLogin}>Log in</Login>
      <Register onClick={toRegister}>Register</Register>
    </div>
  );
};

export default LandingPage;