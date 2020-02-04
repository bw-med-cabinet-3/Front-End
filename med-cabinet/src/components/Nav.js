import React from "react";
import {Link} from "react-router-dom";

export default function Nav () {
    return (
        <header>
        <nav>
            <Link to="/home">Home</Link>
            <Link to="/strain-search">Strain Search</Link>
            <Link to="/saved-strains">Saved Strains</Link>
            <Link to="/profile">Profile</Link>
        </nav>
        </header>
    )
}
