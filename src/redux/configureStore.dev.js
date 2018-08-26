import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer/rootReducer';

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(createLogger()))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer/rootReducer', () => {
      const nextRootReducer = require('./rootReducer/rootReducer')
        .default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
