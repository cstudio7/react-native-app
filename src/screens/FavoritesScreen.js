import React from 'react';
import { View, StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import WithTabs from '../containers/WithTabs'

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
