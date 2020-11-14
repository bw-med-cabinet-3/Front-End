// React
import React from 'react';
import { useHistory } from 'react-router-dom';
//Import Particles-JS
import Particles from 'react-particles-js';
import './Landing.css';


const LandingPage = () => {
  let history = useHistory();
  
  //Button Paths
  const toLogin = () => {
    history.push('/login');
  }

  const toRegister = () => {
    history.push('/register');
  }

  //Particles
  const particleOpt = {
    "particles":{"number":{"value":80,"density":{"enable":true,"value_area":1000}},"color":{"value":"#80ffaa"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":.5,"random":false,"anim":{"enable":false,"speed":.5,"opacity_min":0.1,"sync":false}},"size":{"value":12,"random":true,"anim":{"enable":false,"speed":60,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":250,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":4,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
    "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":350,"line_linked":{"opacity":1}},
    "bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
    "retina_detect":true,
    "position": "absolute"

  }
  
  
  return (
    
    <div className="Page">
    <div className="Buttons">
      <button className="Login" onClick={toLogin}>Log in</button>
      <button className="Rbutton" onClick={toRegister}>Register</button>
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

export default LandingPage;