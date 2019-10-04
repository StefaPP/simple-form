import { applyMiddleware, compose, createStore, Store } from "redux";
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(): Store {
  const store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware));

  return store;
};
