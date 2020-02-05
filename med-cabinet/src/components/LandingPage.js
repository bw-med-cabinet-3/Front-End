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
    width: 70%;
    height: 300px;
    display:flex;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: 15%;
    flex-flow: row nowrap;
  `;
  const Login = styled.button`
    width: 30%;
    background: white;
    border: 1px solid green;
    border-radius: 5%;
    :hover {
      box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
      border:none;
      background: rgb(59,161,76);
      background: radial-gradient(circle, rgba(59,161,76,0) 0%, rgba(105,215,123,1) 49%, rgba(25,156,62,0) 100%, rgba(21,164,65,1) 100%);
    }
  `;
  const Register = styled.button`
    width: 30%;
    background: white;
    border: 1px solid green;
    border-radius: 5%;
    :hover {
      box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
      border:none;
      background: rgb(59,161,76);
      background: radial-gradient(circle, rgba(59,161,76,0) 0%, rgba(105,215,123,1) 49%, rgba(25,156,62,0) 100%, rgba(21,164,65,1) 100%);
    }
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