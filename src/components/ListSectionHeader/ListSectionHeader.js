import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Spacing, Typography } from '../../constants';

const ListSectionHeader = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.headerText}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.white,
    paddingLeft: Spacing.padding2,
    paddingRight: Spacing.padding2
  },
  headerText: {
    color: Colors.gray,
    fontSize: Typography.small,
    fontWeight: '500',
    backgroundColor: Colors.white,
    paddingBottom: Spacing.padding,
    marginBottom: 1
  }
});

export default ListSectionHeader;
