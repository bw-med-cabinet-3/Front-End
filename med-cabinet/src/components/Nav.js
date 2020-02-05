import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default function Nav () {

    const StyledLink = styled(Link)`
        border: 1px solid black;
        color: green;
    `;
    const NavWrap = styled.div`
        border: 1px solid blue;
        width: 15%;
        margin: 0 auto;
    `;
    return (
        <header>
            <NavWrap>
                <nav>
                    <StyledLink to="/home">Home</StyledLink>
                    <StyledLink to="/strain-search">Strain Search</StyledLink>
                    <StyledLink to="/saved-strains">Saved Strains</StyledLink>
                    <StyledLink to="/profile">Profile</StyledLink>
                </nav>
            </NavWrap>
        </header>
    )
}
