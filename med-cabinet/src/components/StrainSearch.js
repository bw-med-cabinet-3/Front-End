import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Card from "./Card";
import Search from "./Search";
import styled from "styled-components";

const StrainSearch = () => {

    const SearchDiv = styled.div`
        display: flex;
        justify-content: center;
        width: 30%;
        margin: 0 auto;
        margin-top: 3%;
        margin-bottom: 8%;
    `;

    const [strains, setStrains] = useState([]);
    console.log(strains);

    useEffect(() =>{
        axiosWithAuth().get(`/strains`)
        .then(res => {
            console.log(res);
            setStrains(res.data);
        })
        .catch(err => {
            console.log("There's an error", err);
        });
    }, []);


    return (
        <div>
            <Nav />
            <SearchDiv>
                <Search />
            </SearchDiv>
            <section>
                <Card />
            </section>
        </div>
    )
}
export default StrainSearch;