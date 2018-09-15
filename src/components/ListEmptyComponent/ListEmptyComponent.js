import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from '../../constants';

const EmptyList = () => <Text style={styles.text}>Загружается...</Text>;
const EmptyFavorites = () => (
  <Text style={styles.text}>Вы пока ничего не добавили в избранное</Text>
);

const ListEmptyComponent = ({ screen }) => (
  <View style={styles.view}>
    {screen === 'List' ? <EmptyList /> : <EmptyFavorites />}
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
