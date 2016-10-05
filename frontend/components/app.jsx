import React from 'react';
import GreetingContainer from './greeting/greeting_container';

const App = ({ children }) => {
  return(
  <div>
    <header className="header">
      <nav className="header-nav group">
        <a href="/" className='header-logo'>
          <h1 className="header-logo-name">Remember the bacon</h1>
        </a>
        <GreetingContainer />
        { children }
      </nav>
    </header>
  </div>)
};

export default App;
