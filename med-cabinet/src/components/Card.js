import React from "react";
import styled from "styled-components";

const Card = (props) => {

    const Box = styled.div`

        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

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
            <h2>Strain: {props.strain_name}</h2>
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