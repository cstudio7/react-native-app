import React from 'react';
import { Text } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';
import Loadable from 'react-loadable';

const TabBarIcon = Loadable({
  loader: () => import('../components/TabBarIcon'),
  loading: () => <Text>Loading...</Text>
});

const FavoritesScreen = Loadable({
  loader: () => import('../containers/FavoritesScreen'),
  loading: () => <Text>Loading...</Text>
});

const ListScreen = Loadable({
  loader: () => import('../containers/ListScreen'),
  loading: () => <Text>Loading...</Text>
});

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

export default createBottomTabNavigator(
  {
    NamesListStack,
    FavoritesStack
  },
  {
    tabBarOptions: {
      activeTintColor: '#572CA4',
      labelStyle: {
        fontSize: 12
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
