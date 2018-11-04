import React from 'react';
import ListItemComponent from '../../containers/ListItem';
import ListEmptyComponent from '../ListEmptyComponent/ListEmptyComponent';
import { Spacing } from '../../constants';

import { Animated, FlatList, Platform, View, StyleSheet } from 'react-native';
import { Item, Input, Icon } from 'native-base';
import NotFound from '../NotFound';

const searchFormHeight = 72;

class List extends React.Component {
  scroll = new Animated.Value(0);
  headerY;

  constructor(props) {
    super(props);
    this.scrollEventHandler = props.scrollEvent;

    this.headerY = Animated.multiply(
      Animated.diffClamp(this.scroll, 0, searchFormHeight),
      -1
    );

    this.state = {
      target: null
    };

    this.clearSearchForm = this.clearSearchForm.bind(this);
    this.onChangeTextHandler = this.onChangeTextHandler.bind(this);
  }

  renderItem = ({ item }) => (
    <ListItemComponent
      navigation={this.props.navigation}
      name={item}
      gender={this.props.route.key}
      screen={this.props.screen}
    />
  );

  renderListEmptyComponent = () => (
    <ListEmptyComponent screen={this.props.screen} />
  );

  keyExtractor = (item, index) => item.name + index;

  onChangeTextHandler(text) {
    this.setState({ target: text });
  }

  clearSearchForm() {
    this.setState({
      target: null
    });
  }

  render() {
    let { data } = this.props;

    if (this.state.target) {
      data = data.filter(item =>
        item.name.toLowerCase().startsWith(this.state.target.toLowerCase())
      );
    }

    return (
      <View style={styles.container}>
        {this.props.screen !== 'Favorites' && (
          <Animated.View
            style={[
              styles.searchForm,
              {
                transform: [
                  {
                    translateY: this.headerY
                  }
                ]
              }
            ]}>
            <Item rounded>
              <Icon active name="md-search" />
              <Input
                placeholder="Поиск"
                value={this.state.target}
                onChangeText={this.onChangeTextHandler}
              />
              {this.state.target ? (
                <Icon active name="md-close" onPress={this.clearSearchForm} />
              ) : null}
            </Item>
          </Animated.View>
        )}

        <Animated.FlatList
          scrollEventThrottle={16}
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={styles.animatedFlatList}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scroll } } }],
            { useNativeDriver: true }
          )}
          overScrollMode="never"
          contentContainerStyle={
            this.props.screen !== 'Favorites' &&
            styles.animatedFlatListContentContainer
          }
          renderItem={this.renderItem}
          data={data}
          keyExtractor={this.keyExtractor}
          ListEmptyComponent={
            this.state.target && !data.length ? (
              <NotFound />
            ) : (
              <ListEmptyComponent screen={this.props.screen} />
            )
          }
          removeClippedSubviews={Platform.OS === 'android'}
          onScrollBeginDrag={this.scrollEventHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  animatedFlatList: {
    zIndex: 0,
    height: '100%',
    elevation: -1
  },
  animatedFlatListContentContainer: {
    paddingTop: searchFormHeight - Spacing.base
  },
  searchForm: {
    paddingTop: Spacing.base,
    paddingLeft: Spacing.base,
    paddingRight: Spacing.base,
    backgroundColor: 'white',
    paddingBottom: Spacing.base,
    backgroundColor: 'white',
    width: '100%',
    position: 'absolute',
    elevation: 0,
    flex: 1,
    zIndex: 1
  }
});

export default List;
