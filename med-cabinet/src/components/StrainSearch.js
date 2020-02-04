import React, { useEffect, useState } from "react";
import Nav from "./Nav";
// import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";
import Card from "./Card";

const StrainSearch = () => {

    const [strains, setStrains] = useState([]);

    useEffect(() =>{
        axios.get(``)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log("There's an error", err);
        });
    }, []);


    return (
        <div>
        <Nav />
        <h2>this is the page for listing strains and searching them</h2>
        </div>
    )
}
export default StrainSearch;