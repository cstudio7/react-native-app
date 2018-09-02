import React from 'react';
import { View, StyleSheet } from 'react-native';
import Spacing from '../../constants/Spacing';

export default class Tabs extends React.Component {
  render() {
    return <View style={styles.tabs}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  tabs: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});
