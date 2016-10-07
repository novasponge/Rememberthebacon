import { RECEIVE_ALL_TASKS, RECEVIE_ONE_TASK, REMOVE_TASK} from "../actions/task_actions";
import { merge } from 'lodash';

const TaskReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_ALL_TASKS:
      return action.tasks;
    case RECEVIE_ONE_TASK:
      const newTask = {[action.task.id]: action.task};
      return merge({}, state, newTask);
    default:
      return state;
  }
};

export default TaskReducer;
