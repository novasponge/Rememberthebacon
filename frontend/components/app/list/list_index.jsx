import React from 'react';
import {connect} from 'react-redux';
import { fetchAllLists, destroyList, receiveListDetail} from '../../../actions/list_actions';
import { fetchListTasks, receiveTaskDetail } from '../../../actions/task_actions';
import ListItem from './list_item';

class ListIndex extends React.Component{
  constructor (props) {
    super(props);
    this.state = {
      selected: null
    };
  }

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
    this.setState({selected: list.id});
  }

  render() {
    const allLists = this.props.lists.map(list =>
      <ListItem active={list.id === this.state.selected}
                key={list.id}
                name={list.name}
                numTask={list.num_task}
                removeClick={this.handleRemoveClick.bind(this, list.id)}
                editList={this.props.handleEditList.bind(null, list.id, list.name)}
                onToggle={this.handleListShow.bind(this, list)} />
      );

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
