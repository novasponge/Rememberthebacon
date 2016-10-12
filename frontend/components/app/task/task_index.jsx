import React from 'react';
import TaskForm from '../task/task_form';
import {connect} from 'react-redux';
import { receiveAllTasks, destroyTask, receiveTaskDetail } from '../../../actions/task_actions';
import { fetchAllLists } from '../../../actions/list_actions';
import moment from 'moment';

class TaskIndex extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      completed: false,
      completedTab: "unclicked-tab",
      incompleteTab: "clicked-tab"
    };

    this.showCompleted = this.showCompleted.bind(this);
    this.showIncompleted = this.showIncompleted.bind(this);
  }


  handleTaskShow(task, e) {
    this.props.receiveTaskDetail(task);
  }

  showCompleted (e) {
    this.setState({completed: true});
    this.setState({
      completedTab: "clicked-tab",
      incompleteTab: "unclicked-tab",
    });
  }

  showIncompleted (e) {
    this.setState({completed: false});
    this.setState({
      completedTab: "unclicked-tab",
      incompleteTab: "clicked-tab",
    });
  }

  render() {
    const nextTasks = this.props.tasks.filter(task=> task.completed === this.state.completed);
    const AllTasks = nextTasks.map(task =>
      <li key={task.id} onClick={this.handleTaskShow.bind(this, task)}>
        <div className="task-item-container group">
          <div className='task-item-name'>{task.name}</div>
          <div className='task-due'>{task.due_date}</div>
        </div>
      </li>);

    return(
      <div className='task-index-container'>
        <div className="completed-task-button-container">
          <button className={`incompleted-task ${this.state.incompleteTab}`}
          onClick={this.showIncompleted}
          >Incompleted</button>
          <button className={`completed-task ${this.state.completedTab}`}
          onClick={this.showCompleted}
          >Completed</button>
        </div>
        <TaskForm listDetail={this.props.listDetail} />
        <ul className="task-index">
          {AllTasks}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {

  return {
    tasks: Object.keys(state.tasks).map(id => state.tasks[id]),
    listDetail: state.listDetail
  };
}

function mapDispatchToProps(dispatch) {
  return {
    receiveTaskDetail: (task) => dispatch(receiveTaskDetail(task))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskIndex);
