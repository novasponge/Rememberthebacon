import React from 'react';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { searchTasks } from '../../actions/task_actions';
import ClickOutside from 'react-clickoutside-component';


class AppHeader extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      queryStr: "",
      searchBar: "search-string-area inactive"
    };

    this.handleSearchSting = this.handleSearchSting.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearchClick = this.handleSearchClick.bind(this);
    this.handleOutSideClick = this.handleOutSideClick.bind(this);
  }


  handleSearchSting(e) {
    this.setState({queryStr: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.searchTasks(this.state.queryStr);
    this.setState({searchBar: "search-string-area inactive"});
  }

  handleSearchClick (e) {
    this.setState({searchBar: "search-string-area active"});
  }

  handleOutSideClick (e) {
    this.setState({searchBar: "search-string-area inactive"});
  }

  render() {
    return(
      <div className="app-header group">
        <form className="search-bar" onSubmit={this.handleSubmit}>
          <ClickOutside  onClickOutside={this.handleOutSideClick}>
            <input type='text'
                  className={this.state.searchBar}
                  value={this.state.queryStr}
                  onChange={this.handleSearchSting}
                  onClick={this.handleSearchClick}
                  placeholder="Search by task name or date DD/MM/YYYY"/>
          </ClickOutside>
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
