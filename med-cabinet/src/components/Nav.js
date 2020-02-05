import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default function Nav () {

    const StyledLink = styled(Link)`
        color: green;
        margin: 5%;
        margin-left: 12%;
    `;
    const NavWrap = styled.div`
        width: 50%;
        margin: 0 auto;
        margin-top: 2%;
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
