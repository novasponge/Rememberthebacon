import { RECEIVE_ALL_LISTS, RECEIVE_ONE_LIST, REMOVE_LIST } from "../actions/list_actions";
import { merge } from 'lodash';

const ListReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_ALL_LISTS:
      return action.lists;
    case RECEIVE_ONE_LIST:
      const newList = {[action.list.id]: action.list};
      return merge({}, state, newList);
    case REMOVE_LIST:
      const listId = action.id;
      const newState = merge({}, state);
      delete newState[listId];
      return newState;
    default:
      return state;
  }
};

export default ListReducer;
