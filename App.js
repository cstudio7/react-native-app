import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Colors } from './src/constants';
import AppContainer from './src/navigation/AppContainer';
import AppProviders from './src/AppProviders';

export default class App extends Component {
  render() {
    return (
      <AppProviders>
        <StatusBar backgroundColor={Colors.secondary} />
        <AppContainer />
      </AppProviders>
    );
  }
}
