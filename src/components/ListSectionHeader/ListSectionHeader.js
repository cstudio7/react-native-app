import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Colors, Spacing } from '../../constants';

const ListSectionHeader = ({ title }) => (
  <Text style={styles.header}>{title}</Text>
);

const styles = StyleSheet.create({
  header: {
    color: Colors.primary,
    fontSize: 15,
    lineHeight: 18,
    backgroundColor: '#fff',
    paddingBottom: Spacing.padding,
    marginBottom: 1
  }
});

export default ListSectionHeader;
