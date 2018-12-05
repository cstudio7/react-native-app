import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import SearchForm from '../SearchForm/SearchForm';
import List from '../List';
import ListEmptyComponent from '../ListEmptyComponent/ListEmptyComponent';
import { Spacing } from '../../constants';

const searchFormHeight = 72;

class AnimatedList extends React.PureComponent {
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

    this.clearSearchFormHandler = this.clearSearchFormHandler.bind(this);
    this.changeTextHandler = this.changeTextHandler.bind(this);
  }

  changeTextHandler(text) {
    this.setState({ target: text });
  }

  clearSearchFormHandler() {
    this.setState({
      target: null
    });
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
        <SearchForm
          headerY={this.headerY}
          target={this.state.target}
          onChangeTextHandler={this.changeTextHandler}
          onPressHandler={this.clearSearchFormHandler}
        />
        <AnimatedComponent
          {...this.props}
          style={styles.animatedFlatList}
          contentContainerStyle={styles.animatedFlatListContentContainer}
          data={data}
          renderListEmptyComponent={() =>
            renderListEmptyComponent(this.state.target)
          }
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.scroll } } }],
            { useNativeDriver: true }
          )}
        />
      </View>
    );
  }
}

const AnimatedComponent = Animated.createAnimatedComponent(List);

function renderListEmptyComponent(target) {
  let message = 'Загружается...';
  if (target) {
    message = 'Имя не найдено';
  }
  return <ListEmptyComponent message={message} />;
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

export default AnimatedList;
