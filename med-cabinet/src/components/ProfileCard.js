import React from "react";
import "./ProfileCard.css";

export default function ProfileCard (localStorage) {

    return (
        <div className="profileCard">
            <h2>User: {localStorage.firstName} {localStorage.lastName}</h2>
            <h4>First Name:</h4>
            <p>{localStorage.firstMame}</p>
            <h4>Last Name:</h4>
            <p>{localStorage.lastName}</p>
            <h4>Email:</h4>
            <p>{localStorage.email}</p>
        </div>
    );
}