import React, {useState} from "react";
import styled from "styled-components";

const Search = () => {

    const Button = styled.button`
        background: white;
        border: 1px solid green;
        border-radius: 8%;
        margin-left: 20px;
        padding-left: 25px;
        padding-right: 25px;
        :hover {
            background-color: #CCFFBB;
            transition: all 0.5s ease;
        }
    `;

    const [results, setResults] = useState();

    const handleChanges = e => {
        setResults(e.target.value);
    };

    const submitHandler = e => {
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                onChange={handleChanges}
                type="text"
                name="search"
                placeholder="Search a Strain"/>
                <Button type="submit">Results</Button>
            </form>
        </div>
    )
}
export default Search;