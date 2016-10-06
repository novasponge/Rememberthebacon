import * as ACTIONS from '../actions/list_actions';
import * as UTILS from '../util/list_api_util';

const ListMiddleware = (store) => (next) => (action) => {
  let success;
  let error;
  switch (action.type) {
    case ACTIONS.FETCH_ALL_LISTS:
      success = (data) => store.dispatch(ACTIONS.receiveAllLists(data));
      error = (data) => console.log(data);
      UTILS.fetchLists(success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default ListMiddleware;
