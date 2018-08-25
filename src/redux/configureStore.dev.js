import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './reducers/rootReducer/rootReducer';

const configureStore = preloadedState => {
  const store = createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(createLogger()))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers/rootReducer/rootReducer', () => {
      const nextRootReducer = require('./reducers/rootReducer/rootReducer')
        .default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
