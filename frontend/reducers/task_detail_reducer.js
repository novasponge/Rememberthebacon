import { RECEIVE_TASK_DETAIL } from "../actions/task_actions";
import { merge } from 'lodash';

const TaskDetailReducer = ( state=null, action ) => {
  switch (action.type) {
    case RECEIVE_TASK_DETAIL:
      if (action.task) {
        return action.task.id;
      }
      return state;
    default:
      return state;
  }
};


export default TaskDetailReducer;
