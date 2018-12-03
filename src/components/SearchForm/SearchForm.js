import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { Item, Input, Icon } from 'native-base';
import { Spacing } from '../../constants';

const SearchForm = ({
  headerY,
  target,
  onChangeTextHandler,
  onPressHandler
}) => (
  <Animated.View style={getSearchFormStyle(headerY)}>
    <Item rounded>
      <Icon active name="md-search" />
      <Input
        placeholder="Поиск"
        value={target}
        onChangeText={onChangeTextHandler}
      />
      {target ? <Icon active name="md-close" onPress={onPressHandler} /> : null}
    </Item>
  </Animated.View>
);

function getSearchFormStyle(headerY) {
  return [styles.searchForm, { transform: [{ translateY: headerY }] }];
}

const styles = StyleSheet.create({
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

export default SearchForm;
