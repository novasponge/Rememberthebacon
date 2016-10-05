import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => {
  return(
  <div>
    <header className="header">
      <nav className="header-nav group">
        <h1 className='header-logo'>
          <a href="/" className='header-logo-name'>Remember the bacon</a>
        </h1>
        <GreetingContainer />
        { children }
      </nav>
    </header>
  </div>)
};

export default App;
