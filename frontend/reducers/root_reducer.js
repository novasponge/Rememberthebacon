import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ListReducer from './list_reducer';
import TaskReducer from './task_reducer';
import ListDetailReducer from './list_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  lists: ListReducer,
  tasks: TaskReducer,
  listDetail : ListDetailReducer,
});


export default RootReducer;
