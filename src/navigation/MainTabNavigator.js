import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import FavoriteNamesScreen from '../containers/FavoriteNamesScreen';
import NamesListScreen from '../containers/NamesListScreen';

const FavoriteNamesStack = createStackNavigator({
  Favorites: {
    screen: FavoriteNamesScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});

FavoriteNamesStack.navigationOptions = {
  tabBarLabel: 'Избранное',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`md-heart${focused ? '' : '-outline'}`}
    />
  )
};

const NamesListStack = createStackNavigator({
  NamesList: {
    screen: NamesListScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});

NamesListStack.navigationOptions = {
  tabBarLabel: 'Список имен',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={`md-list`} />
};

export default createBottomTabNavigator({
  NamesListStack,
  FavoriteNamesStack
});
