import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../../constants';

const ListEmptyComponent = ({ message }) => (
  <View style={styles.view}>
    <Text style={styles.message}>{message}</Text>
  </View>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50
  },
  message: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.gray
  }
});

export default ListEmptyComponent;
