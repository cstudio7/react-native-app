import React from 'react';
import { Animated, FlatList, Platform, View, StyleSheet } from 'react-native';
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
    this.scrollEventHandler = props.scrollEvent;

    this.headerY = Animated.multiply(
      Animated.diffClamp(this.scroll, 0, searchFormHeight),
      -1
    );

    this.state = {
      target: null
    };

    this.clearSearchFormHanlder = this.clearSearchFormHanlder.bind(this);
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

  clearSearchFormHanlder() {
    this.setState({
      target: null
    });
  }

  getListEmptyComponent() {
    let text = 'Загружается...';

    if (this.props.screen === 'Favorites') {
      text = 'Вы пока ничего не добавили в избранное';
    } else if (this.state.target && !data.length) {
      text = 'Имя не найдено';
    }

    return <ListEmptyComponent text={text} />;
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
          <SearchForm
            headerY={this.headerY}
            target={this.state.target}
            changeTextHandler={this.changeTextHandler}
            clearSearchFormHanlder={this.clearSearchFormHanlder}
          />
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
          ListEmptyComponent={this.getListEmptyComponent}
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
  }
});

export default List;
