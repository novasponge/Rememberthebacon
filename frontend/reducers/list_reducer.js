import { RECEIVE_ALL_LISTS, RECEIVE_ONE_LIST, REMOVE_LIST, ADD_TASK_NUM_TO_LIST } from "../actions/list_actions";
import { merge } from 'lodash';

const _defaultState = {
  list_index_info: {},
  task_num_info: {}
};

const ListReducer = (state = _defaultState, action) => {
  switch(action.type) {
    case RECEIVE_ALL_LISTS:
      const nextState = merge({}, state, {list_index_info: action.list_index_info, task_num_info: action.task_num_info });
      return nextState;
    case RECEIVE_ONE_LIST:
      const newList = {list_index_info: {[action.list.id]: action.list}};
      return merge({}, state, newList);
    case REMOVE_LIST:
      const listId = action.id;
      const newState = merge({}, state);
      delete newState.list_index_info[listId];
      return newState;
    default:
      return state;
  }
};

export default ListReducer;
