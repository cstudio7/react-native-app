import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Loadable from 'react-loadable';

const WithTabs = Loadable({
  loader: () => import('../containers/WithTabs'),
  loading: () => <Text>Loading...</Text>
});

class FavoritesScreen extends React.PureComponent {
  render() {
    if (this.props.isFocused) {
      this.props.favoritesScreenView();
    }

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

export default withNavigationFocus(FavoritesScreen);
