import * as ACTIONS from '../actions/session_actions';
import * as UTIL from '../util/session_api_util';


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
      success = next(action);
      UTIL.logout(success);
      break;
    default:
      return next(action);
  }
};


export default SessionMiddleware;
