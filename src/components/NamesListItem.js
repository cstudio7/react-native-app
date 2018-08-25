import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';
const R = require('ramda');

import { getFavoriteNames, saveFavoriteNames } from '../modules/asyncStorage';

class NamesListItem extends React.Component {
  unfavoriteName = async (gender, targetObject) => {
    const favoriteNames = await getFavoriteNames(gender);
    const newFavoriteNames = favoriteNames.filter(
      nameObject => nameObject.id !== targetObject.id
    );
    await saveFavoriteNames(gender, newFavoriteNames);
    this.props.unfavoriteName(gender, targetObject);
  };

  favoriteName = async (gender, targetObject) => {
    const favoriteNames = await getFavoriteNames(gender);
    let newFavoriteNames = R.uniqBy(nameObject => nameObject.id, [
      ...favoriteNames,
      { ...targetObject, isFavorite: true }
    ]);
    await saveFavoriteNames(gender, newFavoriteNames);
    this.props.favoriteName(gender, targetObject);
  };

  render() {
    const { name } = this.props;

    return (
      <View>
        <Text>{name.name}</Text>
        <TouchableOpacity
          onPress={async () => {
            const { gender } = this.props;
            if (name.isFavorite) {
              await this.unfavoriteName(gender, name);
            } else {
              await this.favoriteName(gender, name);
            }
          }}>
          <Icon.Ionicons
            name={`md-heart${name.isFavorite ? '' : '-outline'}`}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default NamesListItem;
