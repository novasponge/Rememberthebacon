import React from 'react';
import { withRouter } from 'react-router';
import AppHeader from './app_header';
import AppSide from './app_side_bar';
import AppListShow from './list/list_show';
import AppTaskShow from './task/task_show';

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
          <div className="content group">
            <AppSide />
            <AppListShow />
            <AppTaskShow />
          </div>
        </div>
      );
    } else {
      return;
    }
  }
}

export default withRouter(App);
