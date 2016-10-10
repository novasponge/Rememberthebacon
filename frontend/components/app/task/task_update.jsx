import React from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../../../actions/task_actions';
import DatePicker from 'react-datepicker';
import moment from 'moment';

require('react-datepicker/dist/react-datepicker.css');

class TaskUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      startDate: moment(),
      dueDate : moment(),
      priority : "",
      listId : "",
      formState: "update-form",
      completed: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskNameInput = this.handleTaskNameInput.bind(this);
    this.handleDueDateChange = this.handleDueDateChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.taskDetail) {
      this.setState({
        name: nextProps.taskDetail.name,
        startDate: nextProps.taskDetail.start_date ? moment(nextProps.taskDetail.start_date, "YYYY-MM-DD") : moment(),
        dueDate : nextProps.taskDetail.due_date? moment(nextProps.taskDetail.due_date, "YYYY-MM-DD") : moment(),
        priority : nextProps.taskDetail.priority,
        listId : nextProps.taskDetail.list_id,
        completed: nextProps.taskDetail.completed ? "completed" : "Incompleted"
      });
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const newTask = {
      name: this.state.name,
      start_date: this.state.startDate.format("YYYY-MM-DD"),
      due_date: this.state.dueDate.format("YYYY-MM-DD"),
      priority: this.state.priority,
      listId: this.state.listId,
      completed: this.props.taskDetail.completed
    };

    this.props.updateTask(this.props.taskDetail.id, newTask);
  }

  handleTaskNameInput(e) {
    this.setState({name: e.target.value});
  }

  handleDueDateChange (date) {
    this.setState({dueDate: date});
  }

  handleStartDateChange (date) {
    this.setState({startDate: date});
  }

  handleCompleted (e) {
    const newTask = {
      name: this.state.name,
      start_date: this.state.startDate.format("YYYY-MM-DD"),
      due_date: this.state.dueDate.format("YYYY-MM-DD"),
      listId: this.state.listId,
      completed: true
    };
    this.props.updateTask(this.props.taskDetail.id, newTask);
  }

  render () {
    return (
      <div>
        <form className={this.state.formState} onSubmit={this.handleSubmit}>
          <input className="task-update-name" type="text" value={this.state.name}
            onChange={this.handleTaskNameInput} />
          <div className='task-update-start-date'>
            Start<DatePicker
              onChange={this.handleStartDateChange}
              selected={this.state.startDate}
            />
          </div>
          <div className="task-update-due-date">
            Due<DatePicker
              selected={this.state.dueDate}
              onChange={this.handleDueDateChange}
            />
          </div>
          <div>list{this.state.listId}</div>
          <button>Update task</button>
          <div onClick={this.handleCompleted}>complete</div>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    lists: state.lists
  };
}


function mapDispatchToProps(dispatch) {
  return {
    updateTask: (taskId, task) => dispatch(updateTask(taskId, task))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskUpdate);
