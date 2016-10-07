import * as ACTIONS from '../actions/task_actions';
import * as UTIL from '../util/task_api_util';

const TaskMiddleware = (store) => (next) => (action) => {
  let success;
  let error = (data) => console.log(data);
};
