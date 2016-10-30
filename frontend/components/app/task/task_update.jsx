import React from 'react';
import { connect } from 'react-redux';
import { updateTask, destroyTask, receiveTaskDetail } from '../../../actions/task_actions';
import { fetchAllLists } from '../../../actions/list_actions';
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
    this._onSelectList = this._onSelectList.bind(this);
    this._onSelectPriority = this._onSelectPriority.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    this.handleCancelUpdate = this.handleCancelUpdate.bind(this);
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

  handleCompleted () {
    const newTask = {
      name: this.state.name,
      start_date: this.state.startDate ? this.state.startDate.format("YYYY-MM-DD") : null,
      due_date: this.state.dueDate? this.state.dueDate.format("YYYY-MM-DD") : null,
      listId: this.state.listId,
      completed: true
    };
    this.props.updateTask(this.props.taskDetail.id, newTask);
  }

  _onSelectList(option) {
    this.setState({listId: option.value});
  }

  _onSelectPriority(option) {
    this.setState({priority: option.value});
  }

  handleRemoveTask () {
    this.props.destroyTask(this.props.taskDetail.id);
  }

  handleCancelUpdate () {
    this.props.receiveTaskDetail(null);
  }

  render () {
    let listDefaultOption = {value: this.state.listId, label: 'Select'};
    const listOptions = this.props.lists.map(list => {
      if (list.id === this.state.listId) {
        listDefaultOption.label = list.name;
      }
      return {
        value: list.id,
        label: list.name
      };
    });

    let priorityDefaultOpition = {value: this.state.priority, label: 'Select'};
    const priorityOptions = [
      {value: 1, label: <div className="priority-option">
                          <div className="priority-1" />Priority 1
                        </div>},
      {value: 2, label: <div className="priority-option">
                          <div className="priority-2" />Priority 2
                        </div>},
      {value: 3, label: <div className="priority-option">
                          <div className="priority-3"/>Priority 3
                        </div>},
      {value: null, label: <div className="priority-option">
                          <div className="priority-null"/>No priority
                         </div>}
    ];

    priorityOptions.forEach(option => {
      if (this.state.priority === option.value) {
        priorityDefaultOpition.label = option.label;
      }
    });

    if (this.props.taskDetail) {
      return (
        <div className="update-form-container group">
          <form className={this.state.formState} onSubmit={this.handleSubmit}>
            <input className="task-update-name"
                   type="text"
                   value={this.state.name}
                   onChange={this.handleTaskNameInput}/>
            <div className="priority-dropdown">
              <Dropdown
                      options={priorityOptions}
                      onChange={this._onSelectPriority}
                      value={priorityDefaultOpition}/>
            </div>
            <div className='group date'>
              Start<DatePicker
                              className="date-picker"
                              onChange={this.handleStartDateChange}
                              selected={this.state.startDate}
                              maxDate={this.state.dueDate}
                              isClearable={true}
                              placeholderText="no start date"
              />
            </div>
            <div className="group date">
              Due<DatePicker
                            className="date-picker"
                            onChange={this.handleDueDateChange}
                            selected={this.state.dueDate}
                            minDate={this.state.startDate}
                            isClearable={true}
                            placeholderText="no due date"
            />
            </div>
            <div className="task-list-container group">
              list<Dropdown
                           options={listOptions}
                           onChange={this._onSelectList}
                           value={listDefaultOption}/>
            </div>
            <button className="update-task-button">Update task</button>
            <div onClick={this.handleCompleted}
              className="update-task-button">complete
            </div>
            <div onClick={this.handleRemoveTask}
              className="update-task-button">Remove task
            </div>
            <button className="cancel-task-update" onClick={this.handleCancelUpdate}>close <i className="fa fa-times" aria-hidden="true"></i></button>
          </form>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    taskDetail: state.tasks[state.taskDetailId],
    lists: Object.keys(state.lists.list_index_info).map(id => state.lists.list_index_info[id])
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateTask: (taskId, task, oldListId) => dispatch(updateTask(taskId, task, oldListId)),
    destroyTask: (taskId) => dispatch(destroyTask(taskId)),
    fetchAllLists: () => dispatch(fetchAllLists()),
    receiveTaskDetail: (task) => dispatch(receiveTaskDetail(task)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskUpdate);
