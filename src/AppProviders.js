import React from 'react';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './store/configureStore';
import getTheme from '../native-base-theme/components';
import commonColor from '../native-base-theme/variables/commonColor';

const { store, persistor } = configureStore();

function AppProviders({ children }) {
  return (
    <StyleProvider style={getTheme(commonColor)}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {children}
        </PersistGate>
      </Provider>
    </StyleProvider>
  );
}

export default AppProviders;
