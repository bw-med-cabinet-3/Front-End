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
            <h2>This is saved strains</h2>
            {props.error && <p>{props.error}</p>}
            {props.isFetching && <p>Loading...</p>}
            {props.savedStrains && props.savedStrains.map(item => (
                <div className="cardBox1">
                <h2>Strain: {SavedStrains.strain_name}</h2>
                <div className="type">
                <h4>Type: {props.type}</h4>
                </div>
                <h3>Rating:</h3>
                <div className="rateBox"> 
                    <h4>{props.rating}</h4>
                    <img src={Star} alt="icon for rating"/>
                </div>
                <div className="effects">
                <h3>Effects:</h3>
                    <ul>{props.effects}</ul>              
                </div>
                <div className="flavors">
                <h3>Flavors:</h3>
                    <ul>{props.flavors}</ul>                
                </div>
                <div className="description">
                    <h3>Description:</h3>
                    <p>{props.description}</p>
                    </div>
                </div>
            ))}
            </div>
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