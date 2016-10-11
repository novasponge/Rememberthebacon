import { RECEIVE_ALL_TASKS, RECEIVE_ONE_TASK, REMOVE_TASK} from "../actions/task_actions";
import { merge } from 'lodash';

const TaskReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_TASKS:
      return action.tasks;
    case RECEIVE_ONE_TASK:
      const newTask = {[action.task.id]: action.task};
      return merge({}, state, newTask);
    case REMOVE_TASK:
      const taskId = action.id;
      const newState = merge({}, state);
      delete newState[taskId];
      return newState;
    default:
      return state;
  }
};

export default TaskReducer;
