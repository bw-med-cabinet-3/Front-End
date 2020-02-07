// React
import React, { useState, useEffect } from 'react';
// import { BrowserRouter as useParams } from 'react-router-dom';
// Axios
import { axiosWithAuth } from '../utils/axiosWithAuth';
// Styling
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
//Icon Import
import Star from "./img/star.png"


// const [strainDeets, setStrainDeets] = useState({});
// console.log(strainDeets);

// useEffect(() => {
//   axiosWithAuth()
//     .get(`/api/strains/${strainLocation}`)
//     .then(res => {
//       console.log(res);
//       setStrainDeets(res.data);
//     })
//     .catch(err => console.log(err));
// }, [])


const StrainDetails = props => {
  console.log(props)
  return (
    <div>
      <Card key={props.strain_id}>
        <CardBody>
          <CardTitle>Strain: {props.name}</CardTitle>
          <CardSubtitle>Type: {props.type}</CardSubtitle>
          <CardSubtitle>{props.rating}<img src={Star} alt="icon for rating"/></CardSubtitle>
          <CardSubtitle><h3>Effects:</h3><ul>{props.effects}</ul></CardSubtitle>
          <CardSubtitle><h3>Flavors:</h3><ul>{props.flavors}</ul></CardSubtitle>
          <CardSubtitle>Description:<p>{props.description}</p></CardSubtitle>
          <Button>Add to Saved Strains list</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default StrainDetails;