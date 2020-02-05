import React from "react";
import styled from "styled-components";

export default function ProfileCard () {

    const Pcard =styled.div`

    display: flex;
    flex-flow: column nowrap;
    width: 50%;
    border: 1px solid green;
    h2 {
        margin: 0 auto;s
    }
    p {
        margin: 0 auto;
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