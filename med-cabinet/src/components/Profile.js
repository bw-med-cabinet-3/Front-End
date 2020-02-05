import React, { useEffect } from "react";
import ProfileCard from "./ProfileCard";
import Nav from "./Nav";
import styled from "styled-components";

export default function Profile() {

    const Wrap = styled.div`
        h2 {
            text-align: center;
            margin-top: 5%;
        }
    `;
    const Button = styled.button`
        background: white;
        color: green;
        border: 1px solid green;
        border-radius: 8%;
        padding-left: 25px;
        padding-right: 25px;
        display: flex;
        margin 0 auto;
        margin-top: 5%;
        :hover {
            background-color: #CCFFBB;
            transition: all 0.5s ease;
        }
    `;
    const ButtonWrap = styled.div`

    `;

    return (
        <Wrap>
        <Nav />
        <h2>Profile Page</h2>
        <ProfileCard />
        <ButtonWrap>
        <Button>Settings</Button>
        </ButtonWrap>
        </Wrap>
    );
}