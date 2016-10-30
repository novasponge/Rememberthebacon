import React from 'react';
import moment from 'moment';

const TaskItem = (props) => (
  <li onClick={props.taskShow}>
    <div className="task-item-container">
      <div className='task-item-name'>
        <div className={`priority-${props.priority}`} />
        <div className="task-selected-checkbox">
          {props.active? <i className="fa fa-check-square-o" aria-hidden="true"></i> : <i className="fa fa-square-o" aria-hidden="true"></i>}
        </div>
        <div>{props.name}</div>
      </div>
      <div className='task-due'>
        {props.dueDate? moment(props.dueDate).format("MMM Do") : props.dueDate}
      </div>
    </div>
  </li>
);

export default TaskItem;
