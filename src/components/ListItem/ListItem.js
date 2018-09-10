import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'expo';
import Spacing from '../../constants/Spacing';

class ListItem extends React.PureComponent {
  render() {
    const { name, onPress, screen, gender } = this.props;
    return (
      <View style={styles.listItem}>
        <Text style={styles.listText}>{name.name}</Text>
        <TouchableOpacity
          style={styles.touchableArea}
          onPress={() => {
            const payload = {
              gender: gender,
              name: {
                ...name,
                isFavorite: !name.isFavorite
              }
            };
            onPress(payload, screen);
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listText: {
    fontSize: 19,
    marginTop: Spacing.margin3,
    marginBottom: Spacing.margin3
  },
  icon: {
    fontSize: 22,
    color: '#7A62A4',
    marginRight: Spacing.base
  },
  touchableArea: {
    paddingLeft: Spacing.padding3,
    paddingTop: Spacing.padding3,
    paddingBottom: Spacing.padding3
  }
});

export default ListItem;
