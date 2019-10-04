import { applyMiddleware, compose, createStore, Store } from "redux";
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import validateInputMiddleware from '../middleware/validation';
import submitMiddleware from '../middleware/submit';

export default function configureStore(): Store {
  const store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware, validateInputMiddleware, submitMiddleware));

  return store;
};
