import * as ACTIONS from '../actions/task_actions';
import { fetchAllLists } from '../actions/list_actions';
import * as UTILS from '../util/task_api_util';

const TaskMiddleware = (store) => (next) => (action) => {
  let success;
  let error = (data) => console.log(data);
  switch (action.type) {
    case ACTIONS.DESTROY_TASK:
      success = (data) => {
        store.dispatch(ACTIONS.removeTask(data.id));
        store.dispatch(fetchAllLists());
      };
      UTILS.destroyTaskReq(action.id, success, error);
      return next(action);
    case ACTIONS.SEARCH_TASKS:
      success = (data) => store.dispatch(ACTIONS.receiveAllTasks(data));
      UTILS.searchTasksReq(action.queryStr, success, error);
      return next(action);
    case ACTIONS.FETCH_LIST_TASKS:
      success = (data) => store.dispatch(ACTIONS.receiveAllTasks(data));
      UTILS.fetchListTasks(action.listId, success, error);
      return next(action);
    case ACTIONS.FETCH_ALL_TASKS:
      success = (data) => store.dispatch(ACTIONS.receiveAllTasks(data));
      UTILS.fetchTasks(success, error);
      return next(action);
    case ACTIONS.CREATE_TASK:
      success = (data) => {
        store.dispatch(ACTIONS.receiveOneTask(data));
        store.dispatch(fetchAllLists());
      };
      UTILS.createTaskReq(action.listId, action.task, success, error);
      return next(action);
    case ACTIONS.UPDATE_TASK:
      if (action.oldListId === action.task.list_id) {
        success = (data) => {
          store.dispatch(ACTIONS.receiveTaskDetail(data));
          store.dispatch(fetchAllLists());
        };
      } else {
        success = (data) => {
          store.dispatch(fetchAllLists());
          store.dispatch(ACTIONS.removeTask(action.id));
        };
      }
      UTILS.updateTaskReq(action.id, action.task, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default TaskMiddleware;
