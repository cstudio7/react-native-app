import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../../constants';

const ListEmptyComponent = ({ text }) => (
  <View style={styles.view}>
    <Text style={styles.text}>{text}</Text>
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
  text: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.secondary
  }
});

export default ListEmptyComponent;
