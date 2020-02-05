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

  //styling
  const ButtonWrap = styled.div`
    border: 1px solid black;
    width: 50%;
    height: 300px;
    display:flex;
    flex-flow: row nowrap;
  `;
  const Login = styled.button`
    width: 50%;
    background: white;
  `;
  const Register = styled.button`
    width: 50%;
    background: white;
  `;

  return (
    <ButtonWrap>
      <Login onClick={toLogin}>Log in</Login>
      <Register onClick={toRegister}>Register</Register>
    </ButtonWrap>
  );
};

export default LandingPage;