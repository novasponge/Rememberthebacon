import React from 'react';
import { withRouter } from 'react-router';
import AppHeader from './app_header';
import AppSide from './app_side_bar';


class App extends React.Component {

  componentWillReceiveProps(nextProps) {
    if(!nextProps.loggedIn){
      this.props.router.push("/");
    }
  }

  render() {
    if (this.props.loggedIn) {
      return(
        <div className="app-body">
          <AppHeader />
          <div className="Content group">
            <AppSide />
          </div>
        </div>
      );
    } else {
      return <div>Fix this later</div>;
    }
  }
}

export default withRouter(App);
