import React from 'react';
import { connect } from 'react-redux';
import TaskForm from '../task/task_form';
import TaskIndex from '../task/task_index';

class ListShow extends React.Component {

  render(){
    return(
      <div className='list-show-container group' >
        <div className="completed-button-container" />
        <div className='task-options-container' />
        <TaskForm listDetail={this.props.listDetail} />
        <TaskIndex listDetail={this.props.listDetail} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    listDetail: state.listDetail
  };
}

export default connect(mapStateToProps)(ListShow);
