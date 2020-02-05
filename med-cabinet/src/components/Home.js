// React
import React, { useState } from 'react';
import Nav from "./Nav";
import styled from "styled-components";

const Home = () => {

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
    margin-top: 15%;
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
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
  `;

  const Button2 = styled.button`
  width: 350px;
  height: 200px;
  border: 1px solid green;
  background: white;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  `;

  const Button3 = styled.button`
  width: 350px;
  height: 200px;
  border: 1px solid green;
  background: white;
  :hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  `;

  return (
    <PageWrap>
      <Nav />
      <Title>
        <h1>Welcome, Username</h1>
        <h2>How can we assist you?</h2>
      </Title>
      <CardWraps>
      
        <Card1>
          <Button>Help Me Find My Perfect Strain</Button>
        </Card1>
        <Card2>
          <Button2>Take Me To My Saved Strains</Button2>
        </Card2>
        <Card3>
          <Button3>Take Me To My Profile</Button3>
        </Card3>
      
      </CardWraps>
    </PageWrap>
  );
};

export default Home;