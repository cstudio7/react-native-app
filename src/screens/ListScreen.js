import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Loadable from 'react-loadable';

const WithTabs = Loadable({
  loader: () => import('../containers/WithTabs'),
  loading: () => <Text>Loading...</Text>
});

class ListScreen extends React.PureComponent {
  componentDidMount() {
    this.props.listScreenView();
    this.props.loadNames('female');
    this.props.loadNames('male');
  }

  render() {
    if (this.props.isFocused) {
      this.props.listScreenView();
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

export default withNavigationFocus(ListScreen);
