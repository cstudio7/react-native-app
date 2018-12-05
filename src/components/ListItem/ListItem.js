import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Body, ListItem, Text, Right, Icon } from 'native-base';
import { Colors } from '../../constants';

const ListItemComponent = ({ name, favorite, tab }) => (
  <ListItem>
    <Body>
      <Text style={styles.listText}>{name.name}</Text>
      <Text style={styles.listText} note numberOfLines={1}>
        {name.meaning}
      </Text>
    </Body>
    <Right>
      <TouchableOpacity
        onPress={() => {
          const payload = {
            gender: tab,
            name: {
              ...name,
              isFavorite: !name.isFavorite
            }
          };
          favorite(payload);
        }}>
        <Icon
          name={`md-heart${name.isFavorite ? '' : '-outline'}`}
          style={styles.icon}
        />
      </TouchableOpacity>
    </Right>
  </ListItem>
);

const styles = StyleSheet.create({
  listText: {
    marginLeft: 0
  },
  icon: {
    fontSize: 22,
    color: Colors.primary
  }
});

export default ListItemComponent;
