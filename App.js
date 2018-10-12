import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './src/store/configureStore';
import AppNavigator from './src/navigation/AppNavigator';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';

const { store, persistor } = configureStore();

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StatusBar backgroundColor="#320b86" />
            <AppNavigator />
          </PersistGate>
        </Provider>
      </StyleProvider>
    );
  }
}
