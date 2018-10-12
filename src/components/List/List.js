import React from 'react';
import { FlatList, Platform, View } from 'react-native';
import throttle from 'lodash.throttle';
import ListItemComponent from '../../containers/ListItem';
import ListEmptyComponent from '../ListEmptyComponent/ListEmptyComponent';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.scrollEventThrottle = throttle(props.scrollEvent, 5000);
  }

  renderItem = ({ item }) => (
    <ListItemComponent
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
      <View>
        <FlatList
          renderItem={this.renderItem}
          data={data}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={this.renderListEmptyComponent}
          removeClippedSubviews={Platform.OS === 'android'}
          onScrollBeginDrag={this.scrollEventThrottle}
        />
      </View>
    );
  }
}

export default List;
