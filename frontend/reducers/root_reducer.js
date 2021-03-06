import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ListReducer from './list_reducer';
import TaskReducer from './task_reducer';
import ListDetailReducer from './list_detail_reducer';
import TaskDetailReducer from './task_detail_reducer';
import errorReducer from './error_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  lists: ListReducer,
  tasks: TaskReducer,
  listDetail : ListDetailReducer,
  taskDetailId : TaskDetailReducer,
  error: errorReducer
});


export default RootReducer;
