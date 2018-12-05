import * as React from 'react';
import { Keyboard } from 'react-native';
import { Tab, Tabs } from 'native-base';
import AnimatedList from '../containers/AnimatedList';

const dismissKeyboard = () => Keyboard.dismiss();

const WithTabs = ({ screen, navigation }) => (
  <Tabs onChangeTab={dismissKeyboard}>
    <Tab heading="Девочки">
      <AnimatedList route={{ key: 'female' }} screen={screen} navigation={navigation} />
    </Tab>
    <Tab heading="Мальчики">
      <AnimatedList route={{ key: 'male' }} screen={screen} navigation={navigation} />
    </Tab>
  </Tabs>
);

export default WithTabs;
