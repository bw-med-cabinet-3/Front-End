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
    // const [filteredStrains, setFilteredStrains] = useState([]);

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
            {strains.map(props => (
                <Card
                  key={props.strain_id}
                  name={props.strain_name}
                  type={props.strain_type}
                  rating={props.strain_rating}
                  description={props.strain_description}
                />
                   ))}
            </section>
        </div>
    )
}
export default StrainSearch;