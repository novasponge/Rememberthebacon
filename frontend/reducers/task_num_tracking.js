import { ADD_TASK_NUM_TO_LIST } from '../actions/list_actions';
import { merge } from 'lodash';

const _defaultState = {
  
};

const TaskDetailReducer = ( state=null, action ) => {
  switch (action.type) {
    case RECEIVE_TASK_DETAIL:
      if (action.task) {
        return action.task.id;
      }
      return null;
    default:
      return state;
  }
};


export default TaskDetailReducer;
