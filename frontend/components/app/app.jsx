import React from 'react';
import { withRouter } from 'react-router';
import AppHeader from './app_header';
import AppSide from './app_side_bar';
import AppListShow from './list/list_show';
import AppTaskUpdate from './task/task_update';

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
            <AppTaskUpdate />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default withRouter(App);
