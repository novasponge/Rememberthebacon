import * as ACTIONS from '../actions/session_actions';
import * as UTIL from '../util/session_api_util';
import { removeLists } from '../actions/list_actions';
import { removeTasks } from "../actions/task_actions";

const SessionMiddleware = (store) => (next) => (action) => {
  let success;
  let error;
  switch (action.type) {
    case ACTIONS.SIGNUP:
      success = (data) => store.dispatch(ACTIONS.receiveCurrentUser(data));
      error = (data) => store.dispatch(ACTIONS.receiveErrors(data.responseJSON));
      UTIL.signup(action.user, success, error);
      return next(action);
    case ACTIONS.LOGIN:
      success = (data) => store.dispatch(ACTIONS.receiveCurrentUser(data));
      error = (data) => store.dispatch(ACTIONS.receiveErrors(data.responseJSON));
      UTIL.login(action.user, success, error);
      return next(action);
    case ACTIONS.LOGOUT:
      success = () => {
        store.dispatch(removeLists());
        store.dispatch(removeTasks());
      };
      UTIL.logout(success);
      return next(action);
    default:
      return next(action);
  }
};


export default SessionMiddleware;
