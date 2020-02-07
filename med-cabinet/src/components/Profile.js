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
    const particleOpt4 = {"particles":{"number":{"value":194,"density":{"enable":true,"value_area":789.1476416322727}},"color":{"value":"#b366ff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":16.03412060865523,"color":"#009933","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
    "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":452.88401101176675,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
    "retina_detect":true};

    // const StyledLink = styled(Link)`
    //     color: green;
    //     width: 10%;
    //     padding-top: 10px;
    //     :hover {
    //         color: green;
    //         text-decoration: none;
    //         border-radius: 7%;
    //         box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
    //         transition: all 0.3s ease;
    //     }
    // `;

    const Wrap = styled.div`
        h2 {
            text-align: center;
            margin-top: 5%;
        }
    `;
    const StyledLink = styled(Link)`
        background: none;
        color: green;
        border: 1px solid green;
        border-radius: 8%;
        padding-left: 100px;
        padding-right: 100px;
        padding-top: 15px;
        padding-bottom: 15px;
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
    const Settings = styled.div`
        display:flex;
        position: relative;
        bottom:45%;
        right: 6.5%;
        width: 1%;
        margin: 0 auto;
    `;
    const ProCard = styled.div`
        position: absolute;
        height: 26%;
        top: 25%;
        left: 37.5%;
        width: 25%;
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
            <ProCard>
                <ProfileCard />
            </ProCard>
            <Settings>
                <StyledLink to="/settings">Settings</StyledLink>            
            </Settings>
        </div>
    );
}