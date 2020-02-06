// React
import React, { useEffect, useState } from "react";
import { connect } from 'react-redux';
// Axios
import { axiosWithAuth } from "../utils/axiosWithAuth";
// Actions
import { getStrains } from '../actions';
// Components
import Nav from "./Nav";
import StrainCard from "./StrainCard";
import Search from "./Search";
// Styling
import "./StrainSearch.css";
import Particles from "react-particles-js";


const StrainSearch = props => {

    // const Title = styled.div`
    //     width: 100%;
    //     height: 50px;
    //     h1 {
    //         display:flex;
    //         justify-content: center;
    //         margin-top:7%;
    //         color: green;
    //     }
    // `;  

    // const SearchDiv = styled.div`
    //     display: flex;
    //     justify-content: center;
    //     width: 30%;
    //     margin: 0 auto;
    //     margin-top: 7%;
    //     margin-bottom: 8%;
    // `;

    // const CardSection = styled.div`
    // width:100%;
    // display: flex;
    // flex-flow: row wrap;
    // justify-content: space-evenly;
    // `;

    //Setting up IBG:
    const particleOpt3 = {"particles":{"number":{"value":170,"density":{"enable":true,"value_area":800}},"color":{"value":"#00cc44"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5211089197812949,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":4.008530152163807,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#80ffaa","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"top-right","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
    "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":true,"mode":"bubble"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":20,"duration":2,"opacity":8,"speed":5},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},
    "retina_detect":true};

    
    const [data, setData] = useState([]);
    const [query, setQuery] = useState("");

    // const search = nameArr => {
    //     setFilteredStrains(nameArr)
    // }

    useEffect(() => {
        props.getStrains();
    }, [])

    useEffect(() => {
        axiosWithAuth()
            .get('/strains')
            .then(res => {
                console.log(res);
                const searchResult = res.data.filter(item => item.strain_name.toLowerCase().includes(query.toLowerCase()));
                setData(searchResult);
            })
            .catch(err => console.log(err));
    }, [query]);

    const handleChanges = e => {
        setQuery(e.target.value);
    };

    function paginate(array, page_size, page_number) {
        // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
        return array.slice((page_number - 1) * page_size, page_number * page_size);
      }


    return (
        <div className="bigBG">
        <div className="homeWrap">
            <Nav />
            <div className="pWrap">
            <Particles 
            params={ particleOpt3 }
             style={{
              "zIndex": "-1"
            }}
            />
            </div>
            <div className="title">
                <h1>Strains</h1>
            </div>
            {/* <SearchDiv> */}
            <form>
                <input
                onChange={handleChanges}
                type="text"
                name="search"
                value={query}
                placeholder="Search a Strain by Name"/>
            </form>
            {/* {data.map((item, i) => (
                <p key={i}>{item.strain_name}</p>
            ))} */}
            {/* </SearchDiv> */}
            <div className="cardBox">
            {data.map((props, i) => (
                <StrainCard
                  key={i}
                  strain-id={props.strain_id}
                  name={props.strain_name}
                  type={props.strain_type}
                  rating={props.strain_rating}
                  description={props.strain_description}
                  effects={props.strain_effects.map((effect, i) => 
                        <li key={i}>{effect}</li>
                  )}
                  flavors={props.strain_flavors.map((flavor, i) => 
                    <li key={i}>{flavor}</li>
                  )}
                />
                   ))}
            </div>
        </div>
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