import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { StyleProvider } from 'native-base';
import { PersistGate } from 'redux-persist/lib/integration/react';
import configureStore from './src/store/configureStore';
import AppContainer from './src/navigation/AppContainer';
import getTheme from './native-base-theme/components';
import commonColor from './native-base-theme/variables/commonColor';
import { Colors } from './src/constants';

const { store, persistor } = configureStore();

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(commonColor)}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <StatusBar backgroundColor={Colors.secondary} />
            <AppContainer />
          </PersistGate>
        </Provider>
      </StyleProvider>
    );
  }
}
