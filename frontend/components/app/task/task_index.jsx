import React from 'react';
import {connect} from 'react-redux';
// import { fetchAllTasks, destroyTask } from '../../../actions/task_actions';

class TaskIndex extends React.Component{

  // componentDidMount() {
  //   debugger
  //   this.props.fetchAllTasks(this.props.listDetail.id);
  // }
  //
  // handleRemoveClick(id, e) {
  //   e.stopPropagation();
  //   this.props.destroyTask(id);
  // }

  // onClick={this.handleListShow.bind(this, task)}
  render() {
    const AllTasks = this.props.tasks.map(task =>
      <li key={task.id}>
        {task.name}
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

// function mapDispatchToProps(dispatch) {
//   return {
//     fetchAllTasks: (listId) => dispatch(fetchAllTasks(listId)),
//     destroyTask: (id) => dispatch(destroyTask(id)),
//   };
// }

export default connect(mapStateToProps)(TaskIndex);
