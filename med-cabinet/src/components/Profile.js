import React, { useEffect } from "react";
import ProfileCard from "./ProfileCard";
import axios from "axios";

export default function Profile() {

    useEffect(() => {
    axios.get(``)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log("There's an error fetching user data", err)
    });
}, []);

    return (
        <div>
        <h2>ProfilePage</h2>
        </div>
    )
}