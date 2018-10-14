import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import { Typography } from '../constants';
import TabBarIcon from '../components/TabBarIcon';
import ListScreen from '../containers/ListScreen';
import FavoritesScreen from '../containers/FavoritesScreen';
import ListItemDetailsScreen from '../containers/ListItemDetails';

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
  },
  ListItemDetails: {
    screen: ListItemDetailsScreen
  },
});

NamesListStack.navigationOptions = {
  tabBarLabel: 'Имена',
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={`md-list`} />
};

export default createBottomTabNavigator(
  {
    NamesListStack,
    FavoritesStack
  },
  {
    tabBarOptions: {
      activeTintColor: '#572CA4',
      labelStyle: {
        fontSize: Typography.xsmall,
        paddingBottom: 3
      },
      style: {
        shadowOpacity: 0.2,
        shadowRadius: 2,
        shadowColor: '#000',
        shadowOffset: { height: 0, width: 0 }
      }
    }
  }
);
