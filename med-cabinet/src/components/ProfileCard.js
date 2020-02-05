import React from "react";
import styled from "styled-components";

export default function ProfileCard () {

    const Pcard =styled.div`

    display: flex;
    flex-flow: column nowrap;
    width: 30%;
    margin: 0 auto;
    margin-top: 10%;
    border: 1px solid green;
    h2 {
        margin: 0 auto;
        margin-bottom: 5%;
    }
    p {
        margin: 0 auto;
        margin-bottom: 2%;
    }
    `;

    return (
        <Pcard>
            <h2>User:</h2>
            <p>First Name:</p>
            <p>Last Name:</p>
            <p>Email:</p>
        </Pcard>
    );
}