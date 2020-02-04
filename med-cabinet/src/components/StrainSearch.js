import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import axios from "axios";
import Card from "./Card";
import Search from "./Search";

const StrainSearch = () => {

    const [strains, setStrains] = useState([]);

    useEffect(() =>{
        axios.get(``)
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
        <Search />
        <h2>this is the page for listing strains and searching them</h2>
        <section>
        <Card />
        </section>
        </div>
    )
}
export default StrainSearch;