import React from 'react';
import ClickOutside from 'react-clickoutside-component';
import {connect} from 'react-redux';
import { createTask } from '../../../actions/task_actions';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      formState: "task-form-hidden"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskNameInput = this.handleTaskNameInput.bind(this);
    this.handleOutSideClick = this.handleOutSideClick.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTask = Object.assign(this.state, {list_id: this.props.listDetail.id});
    this.props.createTask(this.props.listDetail.id, newTask);
    this.setState({name: ""});
  }

  handleTaskNameInput(e) {
    this.setState({name: e.target.value});
  }

  handleOutSideClick(e) {
    this.setState({formState: "task-form-hidden"});
  }

  handleFormClick(e) {
    this.setState({formState: "task-form"});
  }

  render() {
    return(
      <ClickOutside onClickOutside={this.handleOutSideClick}>
        <form className={this.state.formState} onSubmit={this.handleSubmit}
          onClick={this.handleFormClick}>
          <input className='task-name' type="text" value={this.state.name}
            onChange={this.handleTaskNameInput} placeholder="Add a task..."
            disabled={!this.props.listDetail} />
          <button className='add-task' disabled={!this.state.name}>Add Task</button>
        </form>
      </ClickOutside>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    createTask: (listId, task) => dispatch(createTask(listId, task))
  };
}

export default connect(null, mapDispatchToProps)(TaskForm);
