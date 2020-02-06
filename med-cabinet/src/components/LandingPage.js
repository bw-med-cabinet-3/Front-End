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
    "particles":{"number":{"value":80,"density":{"enable":true,"value_area":1000}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
    "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
    "bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
    "retina_detect":true,
    "position": "absolute"

  }

  //styling
  const Page = styled.div`
    width:100%;
    height: 100vh;
    background: rgb(80,181,110);
    background: radial-gradient(circle, rgba(80,181,110,1) 0%, rgba(160,255,163,1) 100%)
  `;

  const ButtonWrap = styled.div`
    position: relative;
    top: 30%;
    width: 100%;
    background: none;
    height: 100px;
    padding-top: 1%;
    margin: 0 auto;
    zIndex: 2;
    flex-flow: row nowrap;
  `;
  const Login = styled.button`
    width: 25%;
    height: 60px;
    margin-left: 16%;
    margin-top: 6.75%;
    background: white;
    border: 1px solid #47d147;
    border-radius: 5%;
    box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
    :hover {
      box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
      border:none;
      background: rgb(118,255,158);
      background: radial-gradient(circle, rgba(118,255,158,1) 0%, rgba(190,255,206,1) 100%);
    }
  `;
  const Register = styled.button`
    width: 25%;
    height: 60px;
    margin-left: 16%;
    margin-top: 6.75%;
    background: white;
    border: 1px solid #47d147;
    border-radius: 5%;
    box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
    :hover {
      box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
      border:none;
      background: rgb(118,255,158);
      background: radial-gradient(circle, rgba(118,255,158,1) 0%, rgba(190,255,206,1) 100%);
    }
  `;

  return (
    
    <Page>
    <ButtonWrap>
    <Login onClick={toLogin}>Log in</Login>
    <Register onClick={toRegister}>Register</Register>
    </ButtonWrap>
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