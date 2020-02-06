import React from "react";
import styled from "styled-components";

export default function ProfileCard (localStorage) {

    const Pcard =styled.div`

        box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);

        display: flex;
        flex-flow: column nowrap;
        width: 100%;
        margin: 0 auto;
        border: 1px solid green;
        h2 {
            margin: 0 auto;
            margin-bottom: 5%;
            margin-top: 3%;
            color: green;
        }
        h4 {
            margin: 0 auto;
            margin-bottom: 2%;
        }
    `;

    return (
        <Pcard>
            <h2>User: {localStorage.message}</h2>
            <h4>First Name:</h4>
            <p>{localStorage.first_name}</p>
            <h4>Last Name:</h4>
            <p>{localStorage.last_name}</p>
            <h4>Email:</h4>
            <p> {localStorage.email}</p>
        </Pcard>
    );
}