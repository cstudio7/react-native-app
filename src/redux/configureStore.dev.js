import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import { createLogger } from 'redux-logger';

import rootReducer from './rootReducer/rootReducer';

const configureStore = () => {
  const persistConfig = {
    key: 'root',
    storage
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    compose(applyMiddleware(createLogger()))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer/rootReducer', () => {
      const nextRootReducer = require('./rootReducer/rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
