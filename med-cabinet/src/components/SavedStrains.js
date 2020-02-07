// React
import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import Nav from "./Nav";
// Axios
import { axiosWithAuth } from "../utils/axiosWithAuth";
// Actions
import { getSavedStrains } from '../actions';
//Import Styling
import "./SavedStrains.css"
import  Star  from "./img/star.png";


const SavedStrains = props => {
    console.log(props);
    console.log(props.savedStrains);
    const [strainID, setStrainID] = useState({});

    useEffect(() => {
        console.log(strainID);
        if (strainID) {
            axiosWithAuth()
                .delete(`/users/${strainID}/strains`)
                .then(res => {
                    console.log(res);
                })
                .catch(err => console.log(err));
        }
    }, [strainID])

    // const deleteStrain = id => {
    //     axiosWithAuth()
    //         .delete(`/users/${id}/strains`)
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch(err => console.log(err));
    // }

    useEffect(() => {
        props.getSavedStrains();
    }, [])

    const clickHandler = e => {
        e.preventDefault();
        console.log("E.TARGET.ID", e.target.id);
        setStrainID({ strainID: e.target.id });
        console.log("STRAINID", strainID);
    }


    return (
        <div className="wrap">
            <Nav />
            <div className="savedTitle">
            <h9>Saved By: {localStorage.firstName}</h9>
            </div>
            {props.error && <div><p>{props.error}</p></div>}
            {props.isFetching && <div><p>Loading...</p></div>}
            {props.savedStrains && props.savedStrains.map(item => (
                <div className="cardBox1">
                <h2>Strain: {item.strain_name}</h2>
                <div className="type">
                <h3>{item.strain_type}</h3>
                </div>
                <div className="rateBox"> 
                    <h3>Rating:</h3>
                    <h3>{item.strain_rating}</h3>
                    <img src={Star} alt="icon for rating"/>
                </div>
                <div className="effects">
                <h3>Effects:</h3>
                    <p>{item.strain_effects}</p>              
                </div>
                <div className="flavors">
                <h3>Flavors:</h3>
                    <p>{item.strain_flavors}</p>                
                </div>
                <div className="description">
                    <h3>Description:</h3>
                    <p>{item.strain_description}</p>
                </div>
                <button id={item.strain_id} onClick={clickHandler}>Delete</button>
                </div>
            ))}
            </div>
    );
};

const mapStateToProps = state => ({
    savedStrains: state.savedStrainsReducer.savedStrains,
    error: state.savedStrainsReducer.error,
    isFetching: state.savedStrainsReducer.isFetching
});


export default connect(
    mapStateToProps,
    { getSavedStrains }
)(SavedStrains);