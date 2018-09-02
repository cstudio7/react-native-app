import React from 'react';
import { Provider } from 'react-redux';
import { Platform, StatusBar } from 'react-native';
import { AppLoading, Font, Icon } from 'expo';
import { ApolloProvider } from 'react-apollo';
import { PersistGate } from 'redux-persist/lib/integration/react';

import AppNavigator from './src/navigation/AppNavigator';
import initApollo from './src/modules/initApollo';
import initAmplitude from './src/modules/initAmplitude/initAmplitude';
import configureStore from './src/redux/configureStore';

if (__DEV__) {
  initAmplitude();
}

const apolloClient = initApollo({}, { getToken: () => {} });
const { store, persistor } = configureStore();

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <ApolloProvider client={apolloClient}>
            <PersistGate loading={null} persistor={persistor}>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <AppNavigator />
            </PersistGate>
          </ApolloProvider>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      // Asset.loadAsync([
      //   require('./assets/images/robot-dev.png'),
      //   require('./assets/images/robot-prod.png')
      // ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
