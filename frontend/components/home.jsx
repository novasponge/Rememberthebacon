import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class Home extends React.Component {

  componentWillReceiveProps(nextProps) {
    if(nextProps.loggedIn){
      this.props.router.push("/app");
    }
  }

  render() {
    return(
      <div className="home-body">
        <header className="header">
          <nav className="header-nav group">
            <a href="/" className='header-logo'>
              <h1 className="header-logo-name">Remember the bacon</h1>
            </a>
            <GreetingContainer />
          </nav>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { loggedIn: !!state.session.currentUser };
}

export default connect(mapStateToProps)(withRouter(Home));
