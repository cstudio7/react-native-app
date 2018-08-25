import React from 'react';
import { Provider } from 'react-redux';
import { AsyncStorage, Platform, StatusBar } from 'react-native';
import { AppLoading, Font, Icon } from 'expo';
import { ApolloProvider } from 'react-apollo';

import AppNavigator from './src/navigation/AppNavigator';
import initApollo from './src/modules/initApollo';
import configureStore from './src/redux/configureStore';

const apolloClient = initApollo(
  {},
  {
    getToken: async () => {
      try {
        return await AsyncStorage.getItem('@token');
      } catch (error) {
        console.error(error);
      }
    }
  }
);

const store = configureStore();

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
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
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
