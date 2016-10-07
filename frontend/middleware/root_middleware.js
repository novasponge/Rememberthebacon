import { applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import SessionMiddleware from './session_middleware';
import ListMiddleware from './list_middleware';
import TaskMiddleware from './task_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ListMiddleware,
  TaskMiddleware,
  createLogger()
);

export default RootMiddleware;
