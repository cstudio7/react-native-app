import * as React from 'react';
import {
  View,
  Text,
  Animated,
  TouchableOpacity,
  StyleSheet
} from 'react-native';
import { TabView } from 'react-native-tab-view';
import Loadable from 'react-loadable';
import { Colors, Spacing } from '../constants';

const List = Loadable({
  loader: () => import('../containers/List'),
  loading: () => <Text>Loading...</Text>
});

export default class WithTabs extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'female', title: 'Девочки' },
      { key: 'male', title: 'Мальчики' }
    ]
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={styles.tabItem}
              onPress={() =>
                this.setState({ index }, () => {
                  this.props.changeActiveTab(
                    this.state.routes[this.state['index']]
                  );
                })
              }>
              <Animated.Text
                style={[
                  styles.tabText,
                  this.state.index === index ? styles.tabActive : null
                ]}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
      case 'female':
      case 'male':
        return <List route={route} screen={this.props.screen} />;
      default:
        return null;
    }
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    );
  }
}

const styles = StyleSheet.create({
  tabBar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  tabItem: {
    paddingTop: Spacing.padding2,
    paddingBottom: Spacing.padding3,
    paddingLeft: Spacing.padding2,
    paddingRight: Spacing.padding2
  },
  tabActive: {
    color: Colors.primary,
    fontWeight: '600'
  },
  tabText: {
    color: Colors.secondary,
    fontSize: 19
  }
});
