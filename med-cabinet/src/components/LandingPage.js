// React
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from "styled-components";
//Import Particles-JS
import Particles from 'react-particles-js';


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

  //styling
  const Page = styled.div`
    width:100%;
    height: 110vh;
    background: rgb(57,195,97);
    background: radial-gradient(circle, rgba(57,195,97,1) 0%, rgba(165,255,188,1) 100%);
  `;

  const Buttons = styled.div`
    position: relative;
    top: 35%;
    width: 20%;
    height: 1px;
    background: none;
    padding-top: 1%;
    margin: 0 auto;
    zIndex: 1;
    flex-flow: row nowrap;
  `;


  const Login = styled.button`
    width: 25%;
    height: 60px;
    margin-left: 16%;
    margin-top: 12%;
    background: none;
    border: 1px solid green;
    border-radius: 5%;
    box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
    :hover {
      box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
      border:none;
      background: rgb(161,255,188);
      background: radial-gradient(circle, rgba(161,255,188,0.8463760504201681) 0%, rgba(190,255,206,0) 61%);
    }
  `;
  const Register = styled.button`
    width: 25%;
    height: 60px;
    margin-left: 16%;
    margin-top: 12%;
    background: none;
    border: 1px solid green;
    border-radius: 5%;
    box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
    :hover {
      box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
      border:none;
      background: rgb(161,255,188);
      background: radial-gradient(circle, rgba(161,255,188,0.8463760504201681) 0%, rgba(190,255,206,0) 61%);
    }
  `;

  return (
    
    <Page>
    <Buttons>
      <Login onClick={toLogin}>Log in</Login>
      <Register onClick={toRegister}>Register</Register>
    </Buttons>
    <Particles 
    params={ particleOpt }
     style={{
      "zIndex": "-1"
    }}
    />
    </Page>
  );
};

export default LandingPage;