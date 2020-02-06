// React
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
// Axios
import { axiosWithAuth } from "../utils/axiosWithAuth";
// Actions
import { getStrains } from '../actions';
// Components
import Nav from "./Nav";
import StrainCard from "./StrainCard";
import Search from "./Search";
// Styling
import styled from "styled-components";


const StrainSearch = props => {
    console.log(props);

    const Title = styled.div`
        width: 100%;
        height: 50px;
        h1 {
            display:flex;
            justify-content: center;
            margin-top:7%;
            color: green;
        }
    `;  

    const SearchDiv = styled.div`
        display: flex;
        justify-content: center;
        width: 30%;
        margin: 0 auto;
        margin-top: 7%;
        margin-bottom: 8%;
    `;

    const CardSection = styled.div`
    width:100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    `;

    
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    // const search = nameArr => {
    //     setFilteredStrains(nameArr)
    // }

    useEffect(() => {
        props.getStrains();
    }, [])

    useEffect(() => {
        axiosWithAuth()
            .get('/strains')
            .then(res => {
                console.log(res);
                const searchResult = res.data.filter(item => item.strain_name.toLowerCase().includes(query.toLowerCase()));
                setData(searchResult);
            })
            .catch(err => console.log(err));
    }, [query]);

    const handleChanges = e => {
        setQuery(e.target.value);
    };

    function paginate(array, page_size, page_number) {
        // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
        return array.slice((page_number - 1) * page_size, page_number * page_size);
      }


    return (
        <div>
            <Nav />
            <Title>
                <h1>Strains</h1>
            </Title>
            {/* <SearchDiv> */}
            <form>
                <input
                onChange={handleChanges}
                type="text"
                name="search"
                value={query}
                placeholder="Search a Strain by Name"/>
            </form>
            {/* {data.map((item, i) => (
                <p key={i}>{item.strain_name}</p>
            ))} */}
            {/* </SearchDiv> */}
            <CardSection>
            {data.map((props, i) => (
                <StrainCard
                  key={i}
                  strain-id={props.strain_id}
                  name={props.strain_name}
                  type={props.strain_type}
                  rating={props.strain_rating}
                  description={props.strain_description}
                  effects={props.strain_effects.map((effect, i) => 
                        <li key={i}>{effect}</li>
                  )}
                  flavors={props.strain_flavors.map((flavor, i) => 
                    <li key={i}>{flavor}</li>
                  )}
                />
                   ))}
            </CardSection>
        </div>
    );
};

const mapStateToProps = state => ({
    strains: state.strainReducer.strains,
    error: state.strainReducer.error,
    isFetching: state.strainReducer.isFetching
});


export default connect(
    mapStateToProps,
    { getStrains }
)(StrainSearch);