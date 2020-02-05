// React
import React, { useState, useRef, useEffect } from 'react';
import Nav from "./Nav";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {

  //Styling
  //comment

  const PageWrap = styled.div`
    width: 100%;
  `;

  const Title = styled.div`
    display: flex;
    flex-flow: column nowrap;
    text-align: center;
    margin-top: 5%;
  `;

  const CardWraps = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 10%;
    margin-left: 5.75%;
  `;

  const Card1 = styled.div`
    width: 30%;
    height: 200px;
    background: white;
  `;

  const Card2 = styled.div`
    width: 30%;
    height: 200px;
    background: white;
  `;

  const Card3 = styled.div`
    width: 30%;
    height: 200px;
    background: white;
  `;

  const Button = styled.button`
    width: 350px;
    height: 200px;
    border: 1px solid green;
    background: white;
    :hover {      
      box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
      color: green;
      border-radius: 4%;
      transition: all 0.3s ease;
    }
  `;

  const Button2 = styled.button`
    width: 350px;
    height: 200px;
    border: 1px solid green;
    background: white;
    :hover {
      box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
      color: green;
      border-radius: 4%;
      transition: all 0.3s ease;
    }
  `;

  const Button3 = styled.button`
    width: 350px;
    height: 200px;
    border: 1px solid green;
    background: white;
    :hover {
      box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
      color: green;
      border-radius: 4%;
      transition: all 0.3s ease;
    }
  `;

  return (
    <PageWrap>

      <Nav />

      <Title>
        <h1>{localStorage.message}</h1>
        <h2>How can we assist you?</h2>
      </Title>

      <CardWraps>
      
        <Card1>
          <Link to="/strain-search">
            <Button>Help Me Find My Perfect Strain</Button>
          </Link>
        </Card1>
        <Card2>
        <Link to="/saved-strains">
          <Button2>Take Me To My Saved Strains</Button2>
        </Link>
        </Card2>
        <Card3>
        <Link to="/profile">
          <Button3>Take Me To My Profile</Button3>
        </Link>
        </Card3>
      
      </CardWraps>
    </PageWrap>
  );
};

export default Home;