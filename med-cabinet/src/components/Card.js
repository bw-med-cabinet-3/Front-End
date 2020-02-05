import React from "react";
import styled from "styled-components";

const Card = (props) => {

console.log(props);

    const Wrapper = styled.div`
        width:100%;
        margin-bottom: 5%;
    `;

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
        <Wrapper>
        <Box>
            <h2>Strain: {props.name}</h2>
            <p>Type: {props.type}</p>
            <p>Rating: {props.rating}</p>
            <ul>Effects:{props.effects}</ul>
            <ul>Flavors: {props.flavors}</ul>
            <p>Description: {props.description}</p>
        </Box>
        </Wrapper>

    )
}
export default Card;