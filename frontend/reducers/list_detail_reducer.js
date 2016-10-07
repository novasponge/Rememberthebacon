import { RECEIVE_LIST_DETAIL } from "../actions/list_actions";
import { merge } from 'lodash';

const ListDetailReducer = ( state=null, action ) => {
  switch (action.type) {
    case RECEIVE_LIST_DETAIL:
      return action.list;
    default:
      return state;
  }
};


export default ListDetailReducer;
