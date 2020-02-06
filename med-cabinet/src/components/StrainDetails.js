// React
import React from 'react';
// Styling
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
//Icon Import
import Star from "./img/star.png"


const StrainDetails = props => {
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
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default StrainDetails;