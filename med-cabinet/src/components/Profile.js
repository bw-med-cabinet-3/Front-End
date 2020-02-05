import React, { useEffect } from "react";
import ProfileCard from "./ProfileCard";
import axios from "axios";
import Nav from "./Nav";

export default function Profile() {

    return (
        <div>
        <Nav />
        <h2>ProfilePage</h2>
        <ProfileCard />
        </div>
    );
}