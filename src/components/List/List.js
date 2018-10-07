import React from 'react';
import { FlatList, StyleSheet, Platform } from 'react-native';
import throttle from 'lodash.throttle';
import ListItem from '../../containers/ListItem';
import ListEmptyComponent from '../ListEmptyComponent/ListEmptyComponent';
import { Colors } from '../../constants';

class List extends React.PureComponent {
  constructor(props) {
    super(props);
    this.scrollEventThrottle = throttle(props.scrollEvent, 5000);
  }

  renderItem = ({ item }) => (
    <ListItem
      name={item}
      gender={this.props.route.key}
      screen={this.props.screen}
    />
  );

  renderListEmptyComponent = () => (
    <ListEmptyComponent screen={this.props.screen} />
  );

  keyExtractor = (item, index) => item.name + index;

  render() {
    const { data } = this.props;

    return (
      <FlatList
        style={styles.list}
        renderItem={this.renderItem}
        data={data}
        keyExtractor={this.keyExtractor}
        ListEmptyComponent={this.renderListEmptyComponent}
        removeClippedSubviews={Platform.OS === 'android'}
        onScrollBeginDrag={this.scrollEventThrottle}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: Colors.white
  }
});

export default List;
