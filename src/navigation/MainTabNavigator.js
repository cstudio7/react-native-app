import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import FavoritesScreen from '../containers/FavoritesScreen';
import ListScreen from '../containers/ListScreen';

const FavoritesStack = createStackNavigator({
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: () => ({
      header: null
    })
  }
});

FavoritesStack.navigationOptions = {
  tabBarLabel: 'Избранное',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={`md-heart${focused ? '' : '-outline'}`}
    />
  )
};

const NamesListStack = createStackNavigator({
  List: {
    screen: ListScreen,
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
  FavoritesStack
});
