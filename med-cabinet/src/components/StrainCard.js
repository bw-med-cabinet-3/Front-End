// React
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// Axios
import { axiosWithAuth } from "../utils/axiosWithAuth";
// Actions
import { getStrains, findStrain } from '../actions';
// Components
import StrainDetails from './StrainDetails';
// Styling
// import {
//   Card, CardBody,
//   CardTitle, CardSubtitle, Button
// } from 'reactstrap';
//Icon Import
import Star from "./img/star.png"
import "./StrainCard.css";


const StrainCard = (props) => {
    // console.log(props);

    // Box , Rate , Effects , Flavors , Desc , Button
    
    // const Box = styled.div`

    //     box-shadow: 0 4px 8px 0 rgba( 0, 0, 0, 0.2), 0 6px 20px 0 rgba( 0, 0, 0, 0.19);

    //     display: flex;
    //     flex-flow: column wrap;
    //     border: 1px solid green;
    //     border-radius: 3%;
    //     width: 30%;
    //     margin-top: 2%;
    //     h2 {
    //         margin: 0 auto;
    //         margin-bottom: 5%;
    //         margin-top: 5%;
    //     }
    //     p {
    //         margin: 0 auto;
    //         margin-bottom: 5%;
    //         padding-left: 4%;
    //         padding-right: 4%;
    //     }
    //     h3 {
    //         margin: 0 auto;
    //     }
    //     ul {
    //         margin: 0 auto;
    //     }
    // `;

    // const Rate = styled.div`
    //     display:flex;
    //     flex-flow: row nowrap;
    //     justify-content: center;
    //     margin-top: 2%;
    //     margin-bottom: 2%;
    //     img {
    //         margin-left 4%;
    //     }
    //     h3 {
    //         margin-bottom: 2%;
    //     }
    //     h4 {
    //         margin-top: 2%;
    //     }
    // `;

    // const Effects = styled.div`
    //     margin: 0 auto;
    //     h3 {
    //         margin-top: 3%;
    //         margin-bottom: 3%;
    //     }
    //     ul {
    //         margin-top: 3%;
    //         margin-bottom: 3%;
    //     }
    // `;

    // const Flavors = styled.div`
    //     margin: 0 auto;
    //     h3 {
    //         margin-top: 2%;
    //         margin-bottom: 2%;
    //     }
    //     ul {
    //         margin-top: 3%;
    //         margin-bottom: 3%;
    //     }
    // `;
    // const Desc = styled.div`
    //     margin-top: 4%;
    //     h3 {
    //         display: flex;
    //         justify-content: center;
    //         margin-bottom: 3%;
    //     }
    // `;
    // const Button = styled.button`
    // width: 350px;
    // height: 200px;
    // border: 1px solid green;
    // background: white;
    // :hover {      
    //   box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
    //   color: green;
    //   border-radius: 4%;
    //   transition: all 0.3s ease;
    // }
    // `;
    const [strainID, setStrainID] = useState();
    const [strainData, setStrainData] = useState({});
    // console.log(strainData)

    useEffect(() => {
        console.log(strainID);
        if (strainID) {
            axiosWithAuth()
            .post(`/users/${localStorage.id}/strains`, strainID)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        }
    }, [strainID])

    const clickHandler = e => {
        e.preventDefault();
        // props.getStrains();
        console.log("E.TARGET.ID", e.target.id);
        setStrainID({ strainID: e.target.id });
        console.log("STRAINID", strainID);
        // setStrainData(strainHolder);
        alert("Strain saved!");
    };

    const strainHolder = {
        strain_id: props.strain_id,
        strain_name: props.name,
        strain_type: props.type,
        strain_rating: props.rating,
        strain_description: props.description,
        strain_effects: props.effects,
        strain_flavors: props.flavors
    }
    // console.log(strainHolder);


    return (
            // <Box>
            //     <h2>Strain: {props.name}</h2>
            //     <p>Type: {props.type}</p>
            //     <h3>Rating:</h3>
            //     <Rate> 
            //         <h4>{props.rating}</h4>
            //         <img src={Star} alt="icon for rating"/>
            //     </Rate>
            //     <Effects>
            //     <h3>Effects:</h3>
            //         <ul>{props.effects}</ul>              
            //     </Effects>
            //     <Flavors>
            //     <h3>Flavors:</h3>
            //         <ul>{props.flavors}</ul>                
            //     </Flavors>
            //     <Desc>
            //         <h3>Description:</h3>
            //         <p>{props.description}</p>
            //         </Desc>
                    
            //     <Button type="submit">Save Strain</Button>

            // </Box>
            // <div className="wrap">
            <div className="bigBox">
                    <div className="card-cont" key={props.strain_id}>
                    <div className="card">  
                        <h4>Strain: {props.name}</h4>
                        <h5>Rating:</h5>
                        <div className="img">
                        <h6>{props.rating}</h6>
                            <img src={ Star } alt="logo credit"/>
                        </div>
                        {/* <button><Link to={`/strain-details/${props.strain_id}`} style={{ textDecoration: 'none', color: 'green' }}>Strain Details</Link></button> */}
                        <button id={props.strain_id} onClick={clickHandler}>Save Strain</button>
                        </div>
                    </div>
            </div>

    )
}

const mapStateToProps = state => ({
    strains: state.strainReducer.strains,
    error: state.strainReducer.error,
    isFetching: state.strainReducer.isFetching
});


export default connect(
    mapStateToProps,
    { getStrains, findStrain }
)(StrainCard);