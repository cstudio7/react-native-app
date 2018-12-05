import React from 'react';
import { FlatList, Keyboard } from 'react-native';
import ListItem from '../../containers/ListItem';

class List extends React.PureComponent {
  keyExtractor(item, index) {
    return item.name + index;
  }

  renderItem({ item }) {
    return <ListItem name={item} {...this.props} />;
  }

  scrollEventHandler() {
    Keyboard.dismiss();
    this.props.scrollEvent();
  }

  render() {
    return (
      <FlatList
        style={this.props.style}
        contentContainerStyle={this.props.contentContainerStyle}
        scrollEventThrottle={16}
        overScrollMode="never"
        data={this.props.data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem.bind(this)}
        ListEmptyComponent={this.props.renderListEmptyComponent}
        onScrollBeginDrag={this.scrollEventHandler.bind(this)}
      />
    );
  }
}

export default List;
