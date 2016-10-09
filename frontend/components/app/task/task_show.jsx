import React from 'react';
import { connect } from 'react-redux';
import TaskUpdate from './task_update';


class TaskShow extends React.Component {
  render (){
    return(
      <TaskUpdate taskDetail={this.props.taskDetail} />
    );
  }
}

function mapStateToProps(state) {
  return{
    taskDetail: state.taskDetail
  };
}

export default connect(mapStateToProps)(TaskShow);
