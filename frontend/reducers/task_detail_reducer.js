import { RECEIVE_TASK_DETAIL } from "../actions/task_actions";
import { merge } from 'lodash';

const TaskDetailReducer = ( state=null, action ) => {
  switch (action.type) {
    case RECEIVE_TASK_DETAIL:
      return action.task.id;
    default:
      return state;
  }
};


export default TaskDetailReducer;
