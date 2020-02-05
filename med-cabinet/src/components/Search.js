import React, {useState} from "react";
import styled from "styled-components";

const Search = (props) => {

    const Button = styled.button`
        background: white;
        border: 1px solid green;
        border-radius: 8%;
        margin-left: 20px;
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

        const strainSearch = props.results.filter(nameArr => {
            return nameArr.name.toLowerCase().includes(results.toLowerCase());
          });
          props.search(strainSearch);
          console.log(strainSearch);
        };


    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                onChange={handleChanges}
                type="text"
                name="search"
                placeholder="Search a Strain by Name"/>
                <Button type="submit">Results</Button>
            </form>
        </div>
    )
    }
export default Search;