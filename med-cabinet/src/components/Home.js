// React
import React, { useState, useRef, useEffect } from 'react';
import Nav from "./Nav";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Typist from 'react-typist';
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

  return (
    <div className="homeWrap">

      <Nav />
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