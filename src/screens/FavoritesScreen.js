import React from 'react';
import { Amplitude } from 'expo';
import { View, StyleSheet } from 'react-native';
import WithTabs from '../components/WithTabs';

class FavoritesScreen extends React.PureComponent {
  componentWillMount() {
    Amplitude.logEvent('FAVSCREEN_VIEW');
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
