import React from 'react';
import {connect} from 'react-redux';
import { receiveAllTasks, destroyTask, receiveTaskDetail } from '../../../actions/task_actions';
import { fetchAllLists } from '../../../actions/list_actions';
import moment from 'moment';

class TaskIndex extends React.Component{

  handleTaskShow(task, e) {
    this.props.receiveTaskDetail(task);
  }

  render() {
    const AllTasks = this.props.tasks.map(task =>
      <li key={task.id} onClick={this.handleTaskShow.bind(this, task)}>
        <div className="task-item-container group">
          <div className='task-item-name'>{task.name}</div>
          <div className='task-due'>{moment(task.due_date).format('MMMM dd')}</div>
        </div>
      </li>);

    return(
      <div>
        <ul className="task-index">
          {AllTasks}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    tasks: Object.keys(state.tasks).map(id => state.tasks[id])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    receiveTaskDetail: (task) => dispatch(receiveTaskDetail(task))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
