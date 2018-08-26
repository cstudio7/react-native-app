import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Icon } from 'expo';
const R = require('ramda');

import { getFavoriteNames, saveFavoriteNames } from '../modules/asyncStorage';

class NamesListItem extends React.Component {
  unfavoriteName = async ({gender, name}) => {
    const favoriteNames = await getFavoriteNames(gender);
    const newFavoriteNames = favoriteNames.filter(
      nameObject => nameObject.id !== name.id
    );
    await saveFavoriteNames(gender, newFavoriteNames);
    this.props.unfavoriteName({ gender, name });
  };

  favoriteName = async ({gender, name}) => {
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
      <View>
        <Text>{name.name}</Text>
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
          />
        </TouchableOpacity>
      </View>
    );
  }
}

export default NamesListItem;
