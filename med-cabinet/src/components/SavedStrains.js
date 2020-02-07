// React
import React, { useEffect } from "react";
import { connect } from 'react-redux';
import Nav from "./Nav";
// Actions
import { getSavedStrains } from '../actions';
import  Star  from "./img/star.png";
//Import Styling
import "./SavedStrains.css"

const SavedStrains = props => {
    console.log(props);
    console.log(props.savedStrains);

    useEffect(() => {
        props.getSavedStrains();
    }, [])


    return (
        <div className="wrap">
            <Nav />
            <div className="savedTitle">
            <h9>.</h9>
            </div>
            <div className="h1Title">
            <h1>Saved Strains</h1>
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
                    <button>Remove from Favorites</button>
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