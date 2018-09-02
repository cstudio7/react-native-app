import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Spacing from '../constants/Spacing';

const ListHeaderSection = ({ title }) => (
  <Text style={styles.header}>{title}</Text>
);

const styles = StyleSheet.create({
  header: {
    color: '#979797',
    fontSize: 15,
    lineHeight: 18,
    backgroundColor: '#fff',
    paddingBottom: Spacing.padding,
    marginBottom: 1
  }
});

export default ListHeaderSection;
