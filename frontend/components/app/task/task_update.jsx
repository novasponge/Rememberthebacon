import React from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../../../actions/task_actions';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import Dropdown from 'react-dropdown';

import 'react-datepicker/dist/react-datepicker.css';



class TaskUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      startDate: null,
      dueDate : null,
      priority : "",
      listId : "",
      formState: "update-form",
      oldListId: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskNameInput = this.handleTaskNameInput.bind(this);
    this.handleDueDateChange = this.handleDueDateChange.bind(this);
    this.handleStartDateChange = this.handleStartDateChange.bind(this);
    this.handleCompleted = this.handleCompleted.bind(this);
    this._onSelect = this._onSelect.bind(this);
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.taskDetail) {
      this.setState({
        name: nextProps.taskDetail.name,
        startDate: nextProps.taskDetail.start_date ? moment(nextProps.taskDetail.start_date, "YYYY-MM-DD") : null,
        dueDate: nextProps.taskDetail.due_date ? moment(nextProps.taskDetail.due_date, "YYYY-MM-DD") : null,
        priority: nextProps.taskDetail.priority,
        listId: nextProps.taskDetail.list_id,
        oldListId: nextProps.taskDetail.list_id
      });
    }
  }

  handleSubmit(e){
    e.preventDefault();
    const newTask = {
      name: this.state.name,
      start_date: this.state.startDate ? this.state.startDate.format("YYYY-MM-DD") : null,
      due_date: this.state.dueDate ? this.state.dueDate.format("YYYY-MM-DD") : null,
      priority: this.state.priority,
      list_id: this.state.listId,
    };

    this.props.updateTask(this.props.taskDetail.id, newTask, this.state.oldListId);

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
      start_date: this.state.startDate ? this.state.startDate.format("YYYY-MM-DD") : null,
      due_date: this.state.dueDate? this.state.dueDate.format("YYYY-MM-DD") : null,
      listId: this.state.listId,
      completed: true
    };
    this.props.updateTask(this.props.taskDetail.id, newTask);
  }

  _onSelect(option) {
    this.setState({listId: option.value});

  }

  render () {
    let defaultOption = {value: this.state.listId, label: 'Select'};
    const options = this.props.lists.map(list => {
      if (list.id === this.state.listId) {
        defaultOption.label = list.name;
      }
      return {
        value: list.id,
        label: list.name
      };
    });

    return (
      <div className="update-form-container group">
        <form className={this.state.formState} onSubmit={this.handleSubmit}>
          <input className="task-update-name" type="text" value={this.state.name}
            onChange={this.handleTaskNameInput} />
          <div className='group date'>
            Start<DatePicker
              className="date-picker"
              onChange={this.handleStartDateChange}
              selected={this.state.startDate}
              isClearable={true}
              placeholderText="no start date"
            />
          </div>
          <div className="group date">
            Due<DatePicker
              className="date-picker"
              selected={this.state.dueDate}
              onChange={this.handleDueDateChange}
              isClearable={true}
              placeholderText="no due date"
            />
          </div>
          <div className="task-list-container group">
            list<Dropdown
              options={options}
              onChange={this._onSelect}
              value={defaultOption}/>
          </div>
          <button className="update-task-button">Update task</button>
          <div onClick={this.handleCompleted} className="update-task-button">complete</div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    taskDetail: state.tasks[state.taskDetailId],
    lists: Object.keys(state.lists).map(id => state.lists[id])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateTask: (taskId, task, oldListId) => dispatch(updateTask(taskId, task, oldListId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskUpdate);
