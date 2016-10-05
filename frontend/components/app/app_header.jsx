import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const AppHeader = (props) => (
  <div className="app-header">
    <button onClick={props.logout}>logout</button>
  </div>
);

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(null,mapDispatchToProps)(AppHeader);
