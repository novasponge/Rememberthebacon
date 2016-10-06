import { applyMiddleware} from 'redux';
import createLogger from 'redux-logger';
import SessionMiddleware from './session_middleware';
import ListMiddleware from './list_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  ListMiddleware,
  createLogger()
);

export default RootMiddleware;
