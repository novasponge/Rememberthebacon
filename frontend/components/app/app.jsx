import React from 'react';
import { withRouter } from 'react-router';
import AppHeader from './app_header';

class App extends React.Component {

  componentWillReceiveProps(nextProps) {
    if(!nextProps.loggedIn){
      this.props.router.push("/");
    }
  }

  render() {
    if (this.props.loggedIn) {
      return(
        <div>
          <AppHeader />
        </div>
      );
    }
  }
}

export default withRouter(App);
