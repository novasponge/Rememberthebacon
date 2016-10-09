import React from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../../../actions/task_actions';

class TaskUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      dueDate : "",
      listId : "",
      formState: "update-form"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskNameInput = this.handleTaskNameInput.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      name: nextProps.taskDetail.name,
      dueDate : nextProps.taskDetail.due_date,
      listId : nextProps.taskDetail.list_id,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateTask(this.props.taskDetail.id, this.state);
  }

  handleTaskNameInput(e) {
    this.setState({name: e.target.value});
  }

  render () {
    return (
      <form className={this.state.formState} onSubmit={this.handleSubmit}>
        <input className="task-update-name" type="text" value={this.state.name}
          onChange={this.handleTaskNameInput} />
        <div>{this.state.dueDate}</div>
        <div>{this.state.listId}</div>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateTask: (taskId, task) => dispatch(updateTask(taskId, task))
  };
}

export default connect(null, mapDispatchToProps)(TaskUpdate);
