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

  return (
    <PageWrap>
      <Nav />
      <Title>
        <h1>Welcome, Username</h1>
        <h2>How can we assist you?</h2>
      </Title>
    </PageWrap>
  );
};

export default Home;