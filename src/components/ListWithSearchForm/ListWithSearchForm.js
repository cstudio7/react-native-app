import React, { useState } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import SearchForm from '../SearchForm/SearchForm';
import List from '../List';
import ListEmptyComponent from '../ListEmptyComponent/ListEmptyComponent';
import { Spacing } from '../../constants';

const searchFormHeight = 72;

const ListWithSearchForm = props => {
  const scrollY = new Animated.Value(0);
  const headerY = Animated.multiply(
    Animated.diffClamp(scrollY, 0, searchFormHeight),
    -1
  );

  const [target, setTarget] = useState('');

  function clearSearchFormHandler() {
    setTarget('');
  }

  function filterData(data) {
    if (target) {
      return data.filter(item =>
        item.name.toLowerCase().startsWith(target.toLowerCase())
      );
    }
    return data;
  }

  function renderListEmptyComponent(target) {
    let message = 'Загружается...';
    if (target) {
      message = 'Имя не найдено';
    }
    return <ListEmptyComponent message={message} />;
  }

  const data = filterData(props.data, target);

  return (
    <View style={styles.container}>
      <SearchForm
        headerY={headerY}
        target={target}
        onChangeTextHandler={setTarget}
        onPressHandler={clearSearchFormHandler}
      />
      <AnimatedList
        {...props}
        style={styles.animatedFlatList}
        contentContainerStyle={styles.animatedFlatListContentContainer}
        data={data}
        renderListEmptyComponent={() => renderListEmptyComponent(target)}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
};

const AnimatedList = Animated.createAnimatedComponent(List);

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

export default ListWithSearchForm;
