// React
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// Axios
import { axiosWithAuth } from '../utils/axiosWithAuth';
// Styling
import { Button, Form, FormGroup, Input } from 'reactstrap';
//Import Particles-JS
import Particles from 'react-particles-js';
import "./Register.css";


const Register = () => {
  //Particles
  const particleOpt = {
    "particles":{"number":{"value":80,"density":{"enable":true,"value_area":1000}},"color":{"value":"#80ffaa"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":.5,"random":false,"anim":{"enable":false,"speed":.5,"opacity_min":0.1,"sync":false}},"size":{"value":12,"random":true,"anim":{"enable":false,"speed":60,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":250,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":4,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
    "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":350,"line_linked":{"opacity":1}},
    "bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
    "retina_detect":true,
    "position": "absolute"
  }

  // const Page = styled.div`
  // width:100%;
  // height: 100vh;
  // background: rgb(57,195,97);
  // background: radial-gradient(circle, rgba(57,195,97,1) 0%, rgba(165,255,188,1) 100%);
  // zIndex: 2;
  // `;
  // const Register = styled.div`
  //   display: flex;
  //   width: 20%;
  //   margin-left: 42%;
  //   margin-top: 0%;
  // `;
  // const Card = styled.div`
  //   display: flex;
  //   flex-flow: column nowrap;
  //   margin: 0 auto;
  //   h2 {
  //     margin: 0 auto;
  //     margin-bottom: 4%;
  //   }
  //   button {
  //     display:flex;
  //     margin: 0 auto;
  //   }
  // `;
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
      .post('/users/register', credentials)
      .then(res => {
        console.log(res.data);
        history.push('/login');
      })
      .catch(err => console.log(err));
  };


  return (
    <div className="Page">
    <div className="bigWrap">
      <div className="Register">
        <div className="Card">
          <h2>Register:</h2>
          <Form onSubmit={register}>
            <FormGroup>
              <Input
                type="text"
                name="first_name"
                placeholder="First Name"
                value={credentials.first_name}
                onChange={handleChanges}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="last_name"
                placeholder="Last Name"
                value={credentials.last_name}
                onChange={handleChanges}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                value={credentials.email}
                onChange={handleChanges}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                value={credentials.password}
                onChange={handleChanges}
                required
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
          <p>{isFetching ? 'Loading...' : null}</p>
          <p>{error ? error : null}</p>
        </div>
      </div>
      </div>
      <Particles 
      params={ particleOpt }
      style={{
        "zIndex": "-1"
      }}
      />
    </div>
  );
};

export default Register;