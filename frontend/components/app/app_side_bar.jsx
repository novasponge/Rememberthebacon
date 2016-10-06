import React from 'react';
// import { connect } from 'react-redux';

const AppSide = (props) => (
  <div className="app-side-bar">
    <a href="/#/app" className='app-side-logo'>
      <h1 className="app-side-logo-name">Remember the bacon</h1>
    </a>
  </div>
);

// const mapDispatchToProps = (dispatch) => {
//   return {
//     logout: () => dispatch(logout())
//   };
// };

export default AppSide;
