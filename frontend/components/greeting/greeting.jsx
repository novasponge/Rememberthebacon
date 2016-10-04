import React from 'react';
import { Link } from 'react-router';

const Greeting = (props) => {
  if (props.currentUser) {
    return(
      <div>
        <h1>Welcome to rememberthebacon {props.currentUser.username}</h1>
        <button onClick={props.logout}>logout</button>
      </div>
    );
  } else {
    return(
      <ul>
        <li><Link to='/signup'>Sign Up</Link></li>
        <li><Link to='/login'>Log In</Link></li>
      </ul>
    );
  }
};

export default Greeting;
