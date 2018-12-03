import * as React from 'react';
import { Keyboard } from 'react-native';
import { Tab, Tabs } from 'native-base';
import List from '../containers/List';

const dismissKeyboard = () => Keyboard.dismiss();

const WithTabs = ({ screen, navigation }) => (
  <Tabs onChangeTab={dismissKeyboard}>
    <Tab heading="Девочки">
      <List route={{ key: 'female' }} screen={screen} navigation={navigation} />
    </Tab>
    <Tab heading="Мальчики">
      <List route={{ key: 'male' }} screen={screen} navigation={navigation} />
    </Tab>
  </Tabs>
);

export default WithTabs;
