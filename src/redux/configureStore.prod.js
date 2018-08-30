import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

import rootReducer from './rootReducer/rootReducer';

const configureStore = () => {
  const persistConfig = {
    key: 'root',
    storage
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer);
  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;