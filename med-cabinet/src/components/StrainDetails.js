// React
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// Axios
import { axiosWithAuth } from '../utils/axiosWithAuth';
// Actions
import { findStrain } from '../actions';
// Styling
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
//Icon Import
import Star from "./img/star.png"


// const [strainDeets, setStrainDeets] = useState({});
// console.log(strainDeets);



const StrainDetails = props => {
  console.log(props)
  
  useEffect(() => {
    props.findStrain();
  }, [])
  
  return (
    <div>
      <Card key={props.strain_id}>
        <CardBody>
          <CardTitle>Strain: {props.strain_name}</CardTitle>
          <CardSubtitle>Type: {props.strain_type}</CardSubtitle>
          <CardSubtitle>{props.strain_rating}<img src={Star} alt="icon for rating"/></CardSubtitle>
          <CardSubtitle><h3>Effects:</h3><ul>{props.strain_effects}</ul></CardSubtitle>
          <CardSubtitle><h3>Flavors:</h3><ul>{props.strain_flavors}</ul></CardSubtitle>
          <CardSubtitle>Description:<p>{props.strain_description}</p></CardSubtitle>
          <Button>Add to Saved Strains list</Button>
        </CardBody>
      </Card>
    </div>
  );
};

const mapStateToProps = state => ({
    foundStrain: state.findStrainReducer.foundStrain,
    error: state.findStrainReducer.error,
    isFetching: state.findStrainReducer.isFetching
});


export default connect(
    mapStateToProps,
    { findStrain }
)(StrainDetails);