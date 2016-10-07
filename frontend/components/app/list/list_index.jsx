import React from 'react';
import {connect} from 'react-redux';
import { fetchAllLists, destroyList } from '../../../actions/list_actions';

class ListIndex extends React.Component{


  componentDidMount() {
    this.props.fetchAllLists();
  }

  handleRemoveClick(id, e) {
    e.stopPropagation();
    this.props.destroyList(id);
  }

  handleEditClick(id, e) {
    e.stopPropagation();
  }

  handleListShow(e) {
    e.stopPropagation();
  }

  render() {
    const AllLists = this.props.lists.map(list =>
      <li key={list.id} onClick={this.handleListShow.bind(this)}>
        {list.name}
          <i className="fa fa-minus-square-o list-delete-button"
            aria-hidden="true"
            onClick={this.handleRemoveClick.bind(this, list.id)}>
          </i>
          <i className="fa fa-pencil-square-o"
            aria-hidden="true"
            onClick={this.handleListShow.bind(this, this.id)}>
          </i>
      </li>);

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
    fetchAllLists: () => dispatch(fetchAllLists()),
    destroyList: (id) => dispatch(destroyList(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
