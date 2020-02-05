import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

export default function Nav () {

    const StyledLink = styled(Link)`
        color: green;
        margin: 5%;
        margin-left: 12%;
        :hover {
            color: #00cc00;
            transition: all 0.3s ease;
            text-decoration: none;
        }
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
