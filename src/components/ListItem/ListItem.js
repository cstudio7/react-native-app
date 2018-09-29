import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';
import { Icon } from 'expo';
import { Spacing, Colors } from '../../constants';

class ListItem extends React.PureComponent {
  render() {
    const { name, favorite, openNameScreen, gender } = this.props;

    return (
      <TouchableWithoutFeedback onPress={openNameScreen}>
        <View style={styles.wrapper}>
          <View style={styles.listItem}>
            <View>
              <Text style={styles.listText}>{name.name}</Text>
              <Text style={styles.listMeaning}>{name.meaning}</Text>
            </View>
            <TouchableOpacity
              style={styles.touchableArea}
              onPress={() => {
                const payload = {
                  gender,
                  name: {
                    ...name,
                    isFavorite: !name.isFavorite
                  }
                };
                favorite(payload);
              }}>
              <Icon.Ionicons
                name={`md-heart${name.isFavorite ? '' : '-outline'}`}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    marginLeft: Spacing.padding2,
    marginRight: Spacing.padding2
  },
  listItem: {
    borderTopWidth: 1,
    borderColor: Colors.lightGray,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  listText: {
    fontSize: 19,
    marginTop: Spacing.margin2
  },
  listMeaning: {
    fontSize: 14,
    color: Colors.gray,
    marginBottom: Spacing.margin2,
    marginTop: 4
  },
  icon: {
    fontSize: 22,
    color: '#7A62A4',
    marginRight: Spacing.base
  },
  touchableArea: {
    paddingLeft: Spacing.padding3,
    paddingTop: 28,
    paddingBottom: Spacing.padding3
  }
});

export default ListItem;
