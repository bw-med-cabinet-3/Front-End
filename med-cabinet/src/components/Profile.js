import React, { useEffect } from "react";
import ProfileCard from "./ProfileCard";
import Nav from "./Nav";
//import Styling
import "./Profile.css";
import styled from "styled-components";
import Particles from "react-particles-js"
import { Link } from "react-router-dom";

export default function Profile() {

    //creating IBG
    const particleOpt4 = {"particles":{"number":{"value":194,"density":{"enable":true,"value_area":789.1476416322727}},"color":{"value":"#049d4c"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":16.03412060865523,"color":"#98ff98","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
    "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":462.88401101176675,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
    "retina_detect":true};

    const Wrap = styled.div`
        h2 {
            text-align: center;
            margin-top: 5%;
        }
    `;
    const Button = styled.button`
        background: white;
        color: green;
        border: 1px solid green;
        border-radius: 8%;
        padding-left: 25px;
        padding-right: 25px;
        display: flex;
        margin 0 auto;
        margin-top: 5%;
        :hover {
            color: green;
            text-decoration: none;
            border-radius: 7%;
            box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
            transition: all 0.3s ease;
        }
        (Link) {
            text-decoration: none;
        }
    `;

    return (
        <div className="wrapPro">
            <Nav />
            <Particles 
            params={ particleOpt4 }
             style={{
              "zIndex": "-1"
            }}
            />
            <div className="title">
            <h2>Profile Page</h2>
            </div>
            <div className="proCard">
            <ProfileCard />
            </div>
            <div className="settings">
            <Button>Settings</Button>
            </div>
        </div>
    );
}