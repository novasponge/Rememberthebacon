import React from 'react';
import { Link } from 'react-router';

const Greeting = (props) => {
  if (props.currentUser) {
    return(
      <div>
        <button onClick={props.logout}>logout</button>
      </div>
    );
  } else {
    return(
      <ul className='header-list'>
        <li><Link className="guest-login" onClick={props.login}>Guest log in</Link></li>
        <li><Link to='/login'>Log in</Link></li>
        <li className="signup-link"><Link to='/signup'>Sign up for free</Link></li>
      </ul>
    );
  }
};

export default Greeting;
