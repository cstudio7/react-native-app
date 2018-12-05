import React from 'react';
import renderer from 'react-test-renderer';
import { Animated } from 'react-native';
import { Input } from 'native-base';
import SearchForm from './SearchForm';

const getInstance = props => {
  return renderer.create(<SearchForm {...props} />).root;
};

const getTree = props => {
  return renderer.create(<SearchForm {...props} />);
};

it('renders search form correctly', () => {
  const scrollY = new Animated.Value(0);
  const headerY = Animated.multiply(Animated.diffClamp(scrollY, 0, 72), -1);

  const props = {
    headerY,
    target: '',
  };

  const tree = getTree(props);
  expect(tree).toMatchSnapshot();
});

it('triggers onChangeText when the user typed out something', () => {
  const onChangeTextHandler = jest.fn();

  const props = {
    target: '',
    onChangeTextHandler
  };

  const instance = getInstance(props);
  instance.findByType(Input).props.onChangeText();
  expect(props.onChangeTextHandler).toHaveBeenCalled();
});

it('triggers onPressHandler when the user clean up the form', () => {
  const onChangeTextHandler = jest.fn();
  const onPressHandler = jest.fn();

  const props = {
    target: '123',
    onChangeTextHandler,
    onPressHandler
  };

  const instance = getInstance(props);
  instance.findByProps({ name: 'md-close' }).props.onPress();
  expect(onPressHandler).toHaveBeenCalled();
});
