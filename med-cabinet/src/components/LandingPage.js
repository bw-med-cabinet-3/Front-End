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
  const Page = styled.div`
    width:100%;
  `;

  const ButtonWrap = styled.div`
    width: 50%;
    height: 300px;
    display:flex;
    margin: 0 auto;
    margin-top: 15%;
    flex-flow: row nowrap;
  `;
  const Login = styled.button`
    width: 50%;
    background: white;
  `;
  const Register = styled.button`
    width: 50%;
    background: white;
    border: 1px solid green;
  `;

  return (
    <Page>
      <ButtonWrap>
        <Login onClick={toLogin}>Log in</Login>
        <Register onClick={toRegister}>Register</Register>
      </ButtonWrap>
    </Page>
  );
};

export default LandingPage;