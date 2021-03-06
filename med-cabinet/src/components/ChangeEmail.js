// React
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Axios
import { axiosWithAuth } from '../utils/axiosWithAuth';
//import Styling
import "./ChangeEmail.css";
import Nav from "./Nav";


const ChangeEmail = () => {
  const [newEmail, setNewEmail] = useState({ email: '' });
  console.log(newEmail);

  const handleChanges = e => {
    setNewEmail({...newEmail, [e.target.name]: e.target.value});
  };

  const userID = localStorage.id;
  let history = useHistory();
  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
      .put(`/users/${userID}/email`, newEmail)
      .then(res => {
        console.log(res);
        localStorage.setItem('email', newEmail.email)
        history.push('/settings');
      })
  }

  return (
    <div className="wrappingPage">
    <Nav />
    <div className="emailStyle">
      <h2>Current email: {localStorage.email}</h2>
      <div className="formEmail">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="New email"
          value={newEmail.email}
          onChange={handleChanges}
          required
        />
        <button>Submit change</button>
      </form>
      </div>
    </div>
    </div>
  );
};

export default ChangeEmail;