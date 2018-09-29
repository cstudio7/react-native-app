import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Loadable from 'react-loadable';

const WithTabs = Loadable({
  loader: () => import('../containers/WithTabs'),
  loading: () => <Text>Loading...</Text>
});

class FavoritesScreen extends React.PureComponent {
  componentDidMount() {
    this.props.favoritesScreenView();
  }

  render() {
    return (
      <View style={styles.container}>
        <WithTabs screen={this.props.navigation.state.routeName} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  }
});

export default FavoritesScreen;
