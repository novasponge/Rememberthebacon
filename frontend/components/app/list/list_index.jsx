import React from 'react';
import {connect} from 'react-redux';
import { fetchAllLists, destroyList, receiveListDetail} from '../../../actions/list_actions';
import { fetchListTasks, receiveTaskDetail } from '../../../actions/task_actions';


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
    this.props.fetchListTasks(list.id);
    this.props.receiveTaskDetail(null);
  }

  render() {
    const allLists = this.props.lists.map(list =>
      <li key={list.id} onClick={this.handleListShow.bind(this, list)}>
        <div className='task-number'>{list.num_task}</div>
        <div className="list-item-name">{list.name}</div>
        <div className="list-item-icon">
          <i className="fa fa-minus-square-o list-buttons"
          aria-hidden="true"
          onClick={this.handleRemoveClick.bind(this, list.id)}>
          </i>
        </div>
        <div className="list-item-icon">
          <i className="fa fa-pencil-square-o list-buttons"
          aria-hidden="true"
          onClick={this.props.handleEditList.bind(null, list.id)}>
          </i>
        </div>
      </li>);

    return(
      <div>
        <ul >
          {allLists}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    lists: Object.keys(state.lists.list_index_info).map( id => state.lists.list_index_info[id])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchAllLists: () => dispatch(fetchAllLists()),
    destroyList: (id) => dispatch(destroyList(id)),
    receiveListDetail: (list) => dispatch(receiveListDetail(list)),
    fetchListTasks: (listId) => dispatch(fetchListTasks(listId)),
    receiveTaskDetail: (task) => dispatch(receiveTaskDetail(task)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
