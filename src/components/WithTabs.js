import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Tab, Tabs } from 'native-base';
import List from '../containers/List';

export default class WithTabs extends React.PureComponent {
  render() {
    return (
      <Tabs>
        <Tab heading="Девочки">
          <List
            route={{ key: 'female' }}
            screen={this.props.screen}
            navigation={this.props.navigation}
          />
        </Tab>
        <Tab heading="Мальчики">
          <List
            route={{ key: 'male' }}
            screen={this.props.screen}
            navigation={this.props.navigation}
          />
        </Tab>
      </Tabs>
    );
  }
}
