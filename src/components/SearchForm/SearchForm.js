import React from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { Item, Input, Icon } from 'native-base';
import { Spacing } from '../../constants';

class SearchForm extends React.PureComponent {
  render() {
    return (
      <Animated.View
        style={[
          styles.searchForm,
          {
            transform: [
              {
                translateY: this.props.headerY
              }
            ]
          }
        ]}>
        <Item rounded>
          <Icon active name="md-search" />
          <Input
            placeholder="Поиск"
            value={this.props.target}
            onChangeText={this.props.changeTextHandler}
          />
          {this.props.target ? (
            <Icon
              active
              name="md-close"
              onPress={this.props.clearSearchFormHandler}
            />
          ) : null}
        </Item>
      </Animated.View>
    );
  }
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
