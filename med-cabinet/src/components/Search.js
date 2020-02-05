// React
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
// Actions
import { getStrains } from '../actions';
// Styling
import styled from "styled-components";


const Search = (props) => {

    console.log(props);

    const Button = styled.button`
        background: white;
        color: green;
        border: 1px solid green;
        border-radius: 8%;
        margin-top: 8%;
        margin-left: 22%;
        padding-left: 25px;
        padding-right: 25px;
        :hover {
            color: green;
            text-decoration: none;
            border-radius: 7%;
            box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
            transition: all 0.3s ease;
        }
    `;

    const [results, setResults] = useState();

    useEffect((props) => {
        if(props){
            props.getStrains();
            console.log(props);
            //     const strainSearch = props.strains.filter(item =>
            //     item.name.toLowerCase().includes(results.toLowerCase()));
            // setResults(strainSearch);
        }
    }, [results]);

    
    const handleChanges = e => {

        setResults(e.target.value);

        const strainSearch = props.strains.filter(item => {

            item.strain_name.toLowerCase().includes(results.toLowerCase())
            return setResults;
    });
        setResults(strainSearch);
        console.log(strainSearch);
        }

    const submitHandler = e => {
        e.preventDefault();
    };

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                onChange={handleChanges}
                type="text"
                name="search"
                value={results}
                placeholder="Search a Strain by Name"/>
            </form>
            <Button type="submit">Results</Button>
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
)(Search);