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
  const Wrap = styled.div`
        h2 {
            text-align: center;
            margin-top: 5%;
        }
    `;
    const Pcard = styled.div`

        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


        display: flex;
        flex-flow: column nowrap;
        width: 30%;
        margin: 0 auto;
        margin-top: 10%;
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
        background: white;
        color: green;
        border: 1px solid green;
        border-radius: 8%;
        padding-left: 25px;
        padding-right: 25px;
        display: flex;
        margin 0 auto;
        margin-top: 5%;
        :hover {
            background-color: #00b33c;
            transition: all 0.5s ease;
        }
    `;
    const ButtonWrap = styled.div`
        display: flex;
    `;

  return (
    <Pcard>
      <p>Email: {localStorage.email}</p>
      <p>Password: {localStorage.password}</p>
      <ButtonWrap>
        <StyledLink to="/change-email">Change Email</StyledLink>
      </ButtonWrap>
    </Pcard>
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