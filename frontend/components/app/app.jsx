import React from 'react';
import { withRouter } from 'react-router';
import AppHeader from './app_header';
import AppSide from './app_side_bar';
import ListShow from './list_show.jsx';

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
            <ListShow />
          </div>
        </div>
      );
    } else {
      return;
    }
  }
}

export default withRouter(App);
