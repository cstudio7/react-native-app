import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Spacing from '../../constants/Spacing';

const Tab = ({ tab }) => (
  <TouchableOpacity onPress={tab.onPress} style={styles.tab}>
    <Text style={[styles.tabText, tab.isActive ? styles.tabActive : null]}>
      {tab.name}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  tab: {
    paddingTop: Spacing.padding2,
    paddingBottom: Spacing.padding3,
    paddingLeft: Spacing.padding2,
    paddingRight: Spacing.padding2
  },
  tabActive: {
    color: '#572CA4',
    fontWeight: '600'
  },
  tabText: {
    color: '#938AA4',
    fontSize: 19
  }
});

export default Tab;
