import React from 'react';
import { View, StyleSheet } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import WithTabs from '../containers/WithTabs'

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
  }
});

export default withNavigationFocus(ListScreen);
