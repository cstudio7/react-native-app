import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native
import thunk from 'redux-thunk';
import { amplitude, api, crashReporter } from '../middleware';
import rootReducer from '../reducers';

const configureStore = () => {
  const persistConfig = {
    key: 'root',
    storage
  };

  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(
    persistedReducer,
    compose(applyMiddleware(amplitude, api, crashReporter, thunk))
  );
  const persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
