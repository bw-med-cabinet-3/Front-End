// React
import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
// Actions
// import { getUser } from '../actions';
// Styling
import styled from "styled-components";


const Settings = props => {
  console.log(props);
  console.log(localStorage);

  // Using styling from Profile to match
  const Whole = styled.div`
  width: 100%;
  height: 98vh;
  padding-top: 13%;
  background: rgb(213,255,240);
  background: radial-gradient(circle, rgba(213,255,240,1) 0%, rgba(199,199,199,0.25253851540616246) 100%);
  `;
  const Wrap = styled.div`
        h2 {
            text-align: center;
        }
    `;
    const Pcard = styled.div`

        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


        display: flex;
        flex-flow: column nowrap;
        width: 30%;
        margin: 0 auto;
        border: 1px solid green;
        padding: 5% 0;
        h2 {
            margin: 0 auto;
            margin-bottom: 5%;
            margin-top: 3%;
        }
        p {
            margin: 0 auto;
            margin-bottom: 2%;
        }
    `;
    const StyledLink = styled(Link)`
    color: green;
    width: 30%;
    height: 50px;
    text-align: center;
    padding-top: 10px;
    margin: 0 auto;
    margin-top:5%;
    :hover {
        color: green;
        text-decoration: none;
        border-radius: 7%;
        box-shadow: 0 4px 8px 0 rgba( 12, 102, 7, 0.2), 0 6px 20px 0 rgba( 12, 102, 7, 0.19);
        transition: all 0.3s ease;
    }
    :(Link) {
      text-decoration: none;
    }
    `;
    const ButtonWrap = styled.div`
        display: flex;
    `;

  return (
    <Whole>
      <Pcard>
        <p>Email: {localStorage.email}</p>
        <p>Password: {localStorage.password}</p>
        <ButtonWrap>
          <StyledLink to="/change-email">Change Email</StyledLink>
        </ButtonWrap>
      </Pcard>
     </Whole> 
  );
};

// const mapStateToProps = state => ({
//   user: state.userReducer.user,
//   error: state.userReducer.error,
//   isFetching: state.userReducer.isFetching
// })

// export default connect(
//   mapStateToProps,
//   { getUser }
// )(Settings);

export default Settings;