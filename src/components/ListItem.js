import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Amplitude, Icon } from 'expo';

class ListItem extends React.Component {
  favoriteName(payload) {
    this.props.favoriteName(payload);
    if (this.props.page === 'favorite') {
      Amplitude.logEvent('FAVSCREEN_ITEM_FAVORITE');
    } else {
      Amplitude.logEvent('LISTSCREEN_ITEM_FAVORITE');
    }
  }

  unfavoriteName(payload) {
    this.props.unfavoriteName(payload);
    if (this.props.page === 'favorite') {
      Amplitude.logEvent('FAVSCREEN_ITEM_UNFAVORITE');
    } else {
      Amplitude.logEvent('LISTSCREEN_ITEM_UNFAVORITE');
    }
  }

  render() {
    const { name } = this.props;

    return (
      <View style={styles.listItem}>
        <Text style={styles.listText}>{name.name}</Text>
        <TouchableOpacity
          onPress={async () => {
            const payload = {
              gender: this.props.gender,
              name: {
                ...name,
                isFavorite: !name.isFavorite
              }
            };
            if (name.isFavorite) {
              this.unfavoriteName(payload);
            } else {
              this.favoriteName(payload);
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
