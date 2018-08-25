import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer/rootReducer';

const configureStore = preloadedState =>
  createStore(rootReducer, preloadedState, applyMiddleware());

export default configureStore;