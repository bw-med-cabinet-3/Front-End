// React
import React from 'react';
import { useHistory } from 'react-router-dom';


const LandingPage = () => {
  let history = useHistory();
  
  const toLogin = () => {
    history.push('/login');
  }

  const toRegister = () => {
    history.push('/register');
  }

  return (
    <div>
      <button onClick={toLogin}>Log in</button>
      <button onClick={toRegister}>Register</button>
    </div>
  );
};

export default LandingPage;