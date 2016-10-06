import React from 'react';
import {connect} from 'react-redux';
import { fetchAllLists } from '../../../actions/list_actions';

class ListIndex extends React.Component{


  componentDidMount() {
    this.props.fetchAllLists();
  }

  render() {
    const AllLists = this.props.lists.map(list => <li key={list.id}>{list.name}</li>);
    return(
      <ul className="lists-index">
        {AllLists}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
  lists: Object.keys(state.lists).map( id => state.lists[id])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllLists: () => dispatch(fetchAllLists())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
