// React
import React from "react";
import { connect } from 'react-redux';
import Nav from "./Nav";
// Actions
import { getSavedStrains } from '../actions';

const SavedStrains = props => {
    console.log(props);
    console.log(props.savedStrains);

    return (
        <div>
            <Nav />
            <h2>This is saved strains</h2>
            <button onClick={props.getSavedStrains}>Load Strains</button>
            {props.error && <p>{props.error}</p>}
            {props.isFetching && <p>Loading...</p>}
            {props.savedStrains && props.savedStrains.map(item => (
                <p>{item.strain_name}</p>
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