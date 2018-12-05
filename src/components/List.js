import React from 'react';
import { FlatList, Keyboard } from 'react-native';
import ListItem from '../containers/ListItem';

class List extends React.PureComponent {
  renderItem = ({ item }) => (
    <ListItem
      navigation={this.props.navigation}
      name={item}
      gender={this.props.route.key}
      screen={this.props.screen}
    />
  );

  keyExtractor = (item, index) => item.name + index;

  scrollEventHandler() {
    Keyboard.dismiss();
    this.props.scrollEvent();
  }

  render() {
    return (
      <FlatList
        scrollEventThrottle={16}
        overScrollMode="never"
        data={this.props.data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        ListEmptyComponent={this.props.renderListEmptyComponent}
        onScrollBeginDrag={this.scrollEventHandler.bind(this)}
      />
    );
  }
}

export default List;
