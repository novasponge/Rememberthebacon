import { LOGOUT, RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERROR} from '../actions/session_actions';
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
    case CLEAR_ERROR:
      const nextErrors = state.errors.filter(error => error !== action.error);
      const nextState = Object.assign({}, state, {errors:nextErrors});
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
