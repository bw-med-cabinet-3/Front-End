// React
import React, { useState, useRef, useEffect } from 'react';
import Nav from "./Nav";
import { Link } from "react-router-dom";
//Styling
import Typist from 'react-typist';
import Particles from "react-particles-js";
import "./Home.css";

const Home = () => {

  //Styling

  // const PageWrap = styled.div`
  //   width: 100%;
  // `;

  // const Title = styled.div`
  //   display: flex;
  //   flex-flow: column nowrap;
  //   text-align: center;
  //   margin-top: 5%;
  // `;

  // const CardWraps = styled.div`
  //   display: flex;
  //   justify-content: space-evenly;
  //   width: 100%;
  //   margin-top: 10%;
  //   margin-left: 5.75%;
  // `;

  // const Card1 = styled.div`
  //   width: 30%;
  //   height: 200px;
  //   background: white;
  // `;

  // const Card2 = styled.div`
  //   width: 30%;
  //   height: 200px;
  //   background: white;
  // `;

  // const Card3 = styled.div`
  //   width: 30%;
  //   height: 200px;
  //   background: white;
  // `;

  // const Button = styled.button`
  //   width: 350px;
  //   height: 200px;
  //   border: 1px solid green;
  //   background: white;
  //   :hover {      
  //     box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
  //     color: green;
  //     border-radius: 4%;
  //     transition: all 0.3s ease;
  //   }
  // `;

  // const Button2 = styled.button`
  //   width: 350px;
  //   height: 200px;
  //   border: 1px solid green;
  //   background: white;
  //   :hover {
  //     box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
  //     color: green;
  //     border-radius: 4%;
  //     transition: all 0.3s ease;
  //   }
  // `;

  // const Button3 = styled.button`
  //   width: 350px;
  //   height: 200px;
  //   border: 1px solid green;
  //   background: white;
  //   :hover {
  //     box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
  //     color: green;
  //     border-radius: 4%;
  //     transition: all 0.3s ease;
  //   }
  // `;

  const particleOpt2 = {"particles":
    {"number":{"value":374,"density":{"enable":true,"value_area":8838.453586281454}},"color":{"value":"#00994d"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":11},"image":{"src":"/img/Github.svg","width":100,"height":100}},"opacity":{"value":0.14430708547789706,"random":true,"anim":{"enable":false,"speed":2.51743935813417,"opacity_min":0.25986470793643046,"sync":false}},"size":{"value":36.076771369474265,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":272.58005034713887,"color":"#ffffff","opacity":0.12025590456491421,"width":0.9620472365193136},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":1362.9002517356944,"rotateY":1200}}},
  "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
  "bubble":{"distance":300,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
  "retina_detect":true};

  return (
    <div className="homeWrap">
    <Nav />
      <Particles 
      params={ particleOpt2 }
       style={{
        "zIndex": "-1"
      }}
      />
      <Typist>
        <div className="titleHome">
          <h1>{localStorage.message}</h1>
          <h2>How can we assist you?</h2>
        </div>
      </Typist>

      <div className="cardDiv">
      
        <div className="card1">
          <Link to="/strain-search">
            <button className="button1">Help Me Find My Perfect Strain</button>
          </Link>
        </div>
        <div className="card2">
        <Link to="/saved-strains">
          <button className="button2">Take Me To My Saved Strains</button>
        </Link>
        </div>
        <div className="card3">
        <Link to="/profile">
          <button className="button3">Take Me To My Profile</button>
        </Link>
        </div>
      </div>
      </div>
  );
};

export default Home;