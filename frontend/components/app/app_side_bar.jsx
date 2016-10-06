import React from 'react';
import ListIndex from './list/list_index';
// import { connect } from 'react-redux';

const AppSide = (props) => (
  <div className="app-side-bar">
    <a href="/#/app" className='app-side-logo'>
      <h1 className="app-side-logo-name">Remember the bacon</h1>
    </a>
    <ListIndex />

  </div>
);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     logout: () => dispatch(logout())
//   };
// };

export default AppSide;
