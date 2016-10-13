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
      indexStyle: '',
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
    this.setState({
      completed: true,
      completedTab: "clicked-tab",
      incompleteTab: "unclicked-tab",
      indexStyle: "crossed"
    });
  }

  showIncompleted (e) {
    this.setState({
      completed: false,
      completedTab: "unclicked-tab",
      incompleteTab: "clicked-tab",
      indexStyle: ""
    });
  }

  render() {
    const nextTasks = this.props.tasks.filter(task=> task.completed === this.state.completed);
    const AllTasks = nextTasks.map(task => {
      if (task.due_date) {
        return (
          <li key={task.id} onClick={this.handleTaskShow.bind(this, task)}>
            <div className="task-item-container">
              <div className='task-item-name'>
                <div className={`priority-${task.priority}`} />
                <div >{task.name}</div>
              </div>
              <div className='task-due'>{moment(task.due_date).format("MMM Do")}</div>
            </div>
          </li>
        );
      } else {
        return (
          <li key={task.id} onClick={this.handleTaskShow.bind(this, task)}>
            <div className="task-item-container">
              <div className='task-item-name'>
                <div className={`priority-${task.priority}`} />
                <div >{task.name}</div>
              </div>
              <div className='task-due'>{task.due_date}</div>
            </div>
          </li>
        );
      }
    });

    let completedTaskNum = 0;
    let incompleteTaskNum = 0;
    let overdue = 0;

    const currentDate = moment();

    this.props.tasks.forEach(task => {
      const due_date = moment(task.due_date);
      if (task.completed) {
        completedTaskNum++;
      } else if (!task.completed) {
        incompleteTaskNum++;
      }

      if (task.due_date) {
        if (!moment(task.due_date).isAfter(currentDate) ) {
          overdue++;
        }
      }
    });

    return(
      <div className='task-index-container'>
        <div className='task-summary-container'>
          <div className='task-summary'>
            <div className='incomplete-task-num summary-num'>{incompleteTaskNum}</div>
            <div>Incomplete</div>
          </div>
          <div className='task-summary'>
            <div className='overdue summary-num'>{overdue}</div>
            <div>Overdue</div>
          </div>
          <div className='task-summary'>
            <div className='completed-task-num summary-num'>{completedTaskNum}</div>
            <div className='completed-task-num'>completed</div>
          </div>
        </div>
        <div className="completed-task-button-container">
          <button className={`incompleted-task ${this.state.incompleteTab}`}
          onClick={this.showIncompleted}
          >Incompleted</button>
          <button className={`completed-task ${this.state.completedTab}`}
          onClick={this.showCompleted}
          >Completed</button>
        </div>
        <TaskForm listDetail={this.props.listDetail} />
        <ul className={`task-index ${this.state.indexStyle}`}>
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
