import React from 'react';
import { Animated, FlatList, View, StyleSheet, Keyboard } from 'react-native';
import ListItem from '../../containers/ListItem';
import ListEmptyComponent from '../ListEmptyComponent/ListEmptyComponent';
import SearchForm from '../SearchForm/SearchForm';
import { Spacing } from '../../constants';

const searchFormHeight = 72;

class List extends React.PureComponent {
  scroll = new Animated.Value(0);
  headerY;

  constructor(props) {
    super(props);

    this.headerY = Animated.multiply(
      Animated.diffClamp(this.scroll, 0, searchFormHeight),
      -1
    );

    this.state = {
      target: null
    };

    this.scrollEventHandler = this.scrollEventHandler.bind(this);
    this.clearSearchFormHandler = this.clearSearchFormHandler.bind(this);
    this.changeTextHandler = this.changeTextHandler.bind(this);
    this.getListEmptyComponent = this.getListEmptyComponent.bind(this);
  }

  renderItem = ({ item }) => (
    <ListItem
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

  changeTextHandler(text) {
    this.setState({ target: text });
  }

  clearSearchFormHandler() {
    this.setState({
      target: null
    });
  }

  scrollEventHandler() {
    Keyboard.dismiss();
    this.props.scrollEvent();
  }

  getListEmptyComponent() {
    let text = 'Загружается...';

    if (this.props.screen === 'Favorites') {
      text = 'Вы пока ничего не добавили в избранное';
    } else if (this.state.target) {
      text = 'Имя не найдено';
    }

    return <ListEmptyComponent text={text} />;
  }

  filterData(data) {
    if (this.state.target) {
      return data.filter(item =>
        item.name.toLowerCase().startsWith(this.state.target.toLowerCase())
      );
    }
    return data;
  }

  render() {
    const data = this.filterData(this.props.data);

    return (
      <View style={styles.container}>
        {this.props.screen !== 'Favorites' && (
          <SearchForm
            headerY={this.headerY}
            target={this.state.target}
            onChangeTextHandler={this.changeTextHandler}
            onPressHandler={this.clearSearchFormHandler}
          />
        )}

        <Animated.FlatList
          scrollEventThrottle={16}
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
          ListEmptyComponent={this.getListEmptyComponent}
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
  }
});

export default List;
