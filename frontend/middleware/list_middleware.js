import * as ACTIONS from '../actions/list_actions';
import * as UTILS from '../util/list_api_util';

const ListMiddleware = (store) => (next) => (action) => {
  let success;
  let error = (data) => console.log(data);
  switch (action.type) {
    case ACTIONS.FETCH_ALL_LISTS:
      success = (data) => store.dispatch(ACTIONS.receiveAllLists(data));
      UTILS.fetchLists(success, error);
      return next(action);
    case ACTIONS.CREATE_LIST:
      success = (data) => store.dispatch(ACTIONS.receiveOneList(data));
      UTILS.createListReq(action.list, success, error);
      return next(action);
    case ACTIONS.UPDATE_LIST:
      success = (data) => store.dispatch(ACTIONS.receiveOneList(data));
      UTILS.updateListReq(action.id, action.list, success, error);
      return next(action);
    case ACTIONS.DESTROY_LIST:
      success = (list) => store.dispatch(ACTIONS.removeList(list.id));
      UTILS.destroyListReq(action.id, success, error);
      return next(action);
    default:
      return next(action);
  }
};

export default ListMiddleware;
