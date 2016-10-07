import React from 'react';
import {connect} from 'react-redux';
import { createTask } from '../../../actions/task_actions';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskNameInput = this.handleTaskNameInput.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const newTask = Object.assign(this.state, {list_id: this.props.listDetail.id});
    this.props.createTask(this.props.listDetail.id, newTask);
  }

  handleTaskNameInput(e) {
    this.setState({name: e.target.value});
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input className='task-name' type="text" value={this.state.name}
          onChange={this.handleTaskNameInput} placeholder="Add a task..."
          disabled={!this.props.listDetail} />
        <button className='add-task' disabled={!this.state.name}>Add Task</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch){
  return {
    createTask: (listId, task) => dispatch(createTask(listId, task))
  };
}

export default connect(null, mapDispatchToProps)(TaskForm);
