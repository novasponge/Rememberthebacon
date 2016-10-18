import { RECEIVE_ERROR, CLEAR_ERROR } from '../actions/error_actions';

const errorReducer = ( state = [], action ) => {
  switch (action.type) {
    case RECEIVE_ERROR:
      return action.error;
    default:
      return state;
  }
};

export default errorReducer;
