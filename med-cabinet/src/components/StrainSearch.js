// React
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
// Axios
import { axiosWithAuth } from "../utils/axiosWithAuth";
// Actions
import { getStrains } from '../actions';
// Components
import Nav from "./Nav";
import Card from "./Card";
import Search from "./Search";
// Styling
import styled from "styled-components";


const StrainSearch = props => {

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

    // const [strains, setStrains] = useState([]);
    const [filteredStrains, setFilteredStrains] = useState([]);

    const search = nameArr => {
        setFilteredStrains(nameArr)
    }

    useEffect(() => {
        props.getStrains();
    }, []);

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
            <SearchDiv>
                <Search />
            </SearchDiv>
            <CardSection>
            {props.strains.map((props, i) => (
                <Card
                  key={i}
                  strain-id={props.strain_id}
                  name={props.strain_name}
                  type={props.strain_type}
                  rating={props.strain_rating}
                  description={props.strain_description}
                  effects={props.strain_effects.map(effect => 
                        <li>{effect}</li>
                  )}
                  flavors={props.strain_flavors.map(flavor => 
                    <li>{flavor}</li>
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