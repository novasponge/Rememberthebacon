import { LOGOUT, RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS} from '../actions/session_actions';
import { merge } from 'lodash';

const _defaultState = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _defaultState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {currentUser: action.currentUser, errors:[]});
    case RECEIVE_ERRORS:
      return merge({}, state, {errors: action.errors});
    case CLEAR_ERRORS:
      const nextState = Object.assign({}, state, {errors:[]});
      return nextState;
    case LOGOUT:
      return {
        currentUser: null,
        errors: []
      };
    default:
      return state;
  }
};

export default SessionReducer;
