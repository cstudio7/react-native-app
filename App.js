import React, { Component } from 'react';
import { Platform, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './src/store/configureStore';
import AppNavigator from './src/navigation/AppNavigator';

const { store, persistor } = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
