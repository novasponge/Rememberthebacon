import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { searchTasks } from '../../actions/task_actions';


class AppHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      queryStr: ""
    };

    this.handleSearchSting = this.handleSearchSting.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchSting(e) {
    this.setState({queryStr: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchTasks(this.state.queryStr);
  }

  render() {
    return(
      <div className="app-header group">
        <form className="search-bar" onSubmit={this.handleSubmit}>
          <input type='text' className='search-string-area' value={this.state.queryStr} onChange={this.handleSearchSting} />
          <button className="search-button">
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
        <button className="logout" onClick={this.props.logout}>logout</button>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
    searchTasks: (queryStr) => dispatch(searchTasks(queryStr))
  };
};

export default connect(null, mapDispatchToProps)(AppHeader);
