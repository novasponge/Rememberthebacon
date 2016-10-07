import React from 'react';
import {connect} from 'react-redux';
import { fetchAllLists, destroyList, receiveListDetail} from '../../../actions/list_actions';
import { fetchAllTasks } from '../../../actions/task_actions';


class ListIndex extends React.Component{

  componentDidMount() {
    this.props.fetchAllLists();
  }

  handleRemoveClick(id, e) {
    e.stopPropagation();
    this.props.destroyList(id);
  }

  handleListShow(list, e) {
    e.stopPropagation();
    this.props.receiveListDetail(list);
    this.props.fetchAllTasks(list.id);
  }

  render() {
    const AllLists = this.props.lists.map(list =>
      <li key={list.id} onClick={this.handleListShow.bind(this, list)}>
        {list.name}
          <i className="fa fa-minus-square-o list-buttons"
            aria-hidden="true"
            onClick={this.handleRemoveClick.bind(this, list.id)}>
          </i>
          <i className="fa fa-pencil-square-o list-buttons"
            aria-hidden="true"
            onClick={this.props.handleEditList.bind(null, list.id)}>
          </i>

      </li>);

    return(
      <div>
        <ul className="lists-index">
          {AllLists}
        </ul>
      </div>
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
    destroyList: (id) => dispatch(destroyList(id)),
    receiveListDetail: (list) => dispatch(receiveListDetail(list)),
    fetchAllTasks: (listId) => dispatch(fetchAllTasks(listId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);