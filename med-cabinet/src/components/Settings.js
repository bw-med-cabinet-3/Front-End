// React
import React from 'react';
import { connect } from 'react-redux';
// Actions
import { getUser } from '../actions';

const Settings = props => {
  console.log(props);

  return (
    <div>
      <p>First name: </p>
      <p>Last name: </p>
      <p>Email: </p>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.userReducer.user,
  error: state.userReducer.error,
  isFetching: state.userReducer.isFetching
})

export default connect(
  mapStateToProps,
  { getUser }
)(Settings);