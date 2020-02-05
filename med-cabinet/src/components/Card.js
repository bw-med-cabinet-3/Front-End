import React from "react";
import styled from "styled-components";

const Card = () => {

    const Box = styled.div`
        display: flex;
        flex-flow: column wrap;
        border: 1px solid green;
        border-radius: 3%;
        width: 30%;
        margin-left: 10%;
        h2 {
            margin: 0 auto;
            margin-bottom: 5%;
            margin-top: 3%;
        }
        p {
            margin: 0 auto;
            margin-bottom: 4%;
        }
    `;
    return (
        <Box>
            <h2>Strain:</h2>
            <p>Type:</p>
            <p>Rating:</p>
            <p>Effects:</p>
            <p>Flavors:</p>
            <p>Symptoms:</p>
            <p>Description:</p>
        </Box>
    )
}
export default Card;