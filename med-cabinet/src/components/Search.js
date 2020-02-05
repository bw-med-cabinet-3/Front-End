import React, {useState} from "react";
import styled from "styled-components";

const Search = (props) => {

    const Wrap = styled.div`
        border: 1px solid black;

    `;

    const Button = styled.button`
        background: white;
        border: 1px solid green;
        border-radius: 8%;
        margin-top: 8%;
        margin-left: 22%;
        padding-left: 25px;
        padding-right: 25px;
        :hover {
            background-color: #00b33c;
            transition: all 0.5s ease;
        }
    `;

    const [results, setResults] = useState();

    const handleChanges = e => {
        setResults(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();

        // const strainSearch = (strains, index) => {
        //         return strains.filter(result => result.toLowerCase().indexOf(query.toLowerCase()) !== -1)
        //   };
        //   props.search(strainSearch);
        //   console.log(strainSearch);
        // };
    }


    return (
        <Wrap>
            <form onSubmit={submitHandler}>
                <input
                onChange={handleChanges}
                type="text"
                name="search"
                placeholder="Search a Strain by Name"/>
            </form>
            <Button type="submit">Results</Button>
        </Wrap>
    )
    }
export default Search;