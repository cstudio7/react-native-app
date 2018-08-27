import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'expo';
const R = require('ramda');

import { getFavoriteNames, saveFavoriteNames } from '../modules/asyncStorage';

class ListItem extends React.Component {
  unfavoriteName = async ({ gender, name }) => {
    const favoriteNames = await getFavoriteNames(gender);
    const newFavoriteNames = favoriteNames.filter(
      nameObject => nameObject.id !== name.id
    );
    await saveFavoriteNames(gender, newFavoriteNames);
    this.props.unfavoriteName({ gender, name });
  };

  favoriteName = async ({ gender, name }) => {
    const favoriteNames = await getFavoriteNames(gender);
    let newFavoriteNames = R.uniqBy(nameObject => nameObject.id, [
      ...favoriteNames,
      { ...name, isFavorite: true }
    ]);
    await saveFavoriteNames(gender, newFavoriteNames);
    this.props.favoriteName({ gender, name });
  };

  render() {
    const { name } = this.props;

    return (
      <View style={styles.listItem}>
        <Text style={styles.listText}>{name.name}</Text>
        <TouchableOpacity
          onPress={async () => {
            const payload = {
              gender: this.props.gender,
              name
            };
            if (name.isFavorite) {
              await this.unfavoriteName(payload);
            } else {
              await this.favoriteName(payload);
            }
          }}>
          <Icon.Ionicons
            name={`md-heart${name.isFavorite ? '' : '-outline'}`}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    borderTopWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
    paddingTop: 22,
    paddingBottom: 22,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listText: {
    fontSize: 19
  },
  icon: {
    fontSize: 20,
    color: '#7A62A4',
    marginRight: 16,
    marginTop: 2
  }
});

export default ListItem;
