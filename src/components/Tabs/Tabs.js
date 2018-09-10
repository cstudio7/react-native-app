import React from 'react';
import { View, StyleSheet } from 'react-native';

const Tabs = ({ children }) => <View style={styles.tabs}>{children}</View>;

const styles = StyleSheet.create({
  tabs: {
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});

export default Tabs;
