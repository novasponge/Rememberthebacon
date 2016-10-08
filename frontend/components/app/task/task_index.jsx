import React from 'react';
import {connect} from 'react-redux';
import { receiveAllTasks, destroyTask } from '../../../actions/task_actions';

class TaskIndex extends React.Component{

  render() {
    const AllTasks = this.props.tasks.map(task =>
      <li key={task.id}>
        <div className="task-item-container">
          {task.name}
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
    receiveAllTasks: (listId) => dispatch(receiveAllTasks(listId)),
    destroyTask: (id) => dispatch(destroyTask(id)),
  };
}

export default connect(mapStateToProps)(TaskIndex);
