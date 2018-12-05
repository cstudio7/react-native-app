import React from 'react';
import { TouchableOpacity } from 'react-native';
import renderer from 'react-test-renderer';
import ListItemComponent from './ListItem';

const name = { id: 1, name: 'artur' };

it('renders a name correctly', () => {
  const tree = renderer.create(<ListItemComponent name={name} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders a favorite name correctly', () => {
  const favoriteName = {
    ...name,
    isFavorite: true
  };
  const tree = renderer.create(<ListItemComponent name={favoriteName} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('triggers onPress when the user taps', () => {
  const onPressEvent = jest.fn();
  const screen = 'Favorites';
  const gender = 'male';
  const expectedPayload = {
    gender,
    name: {
      ...name,
      isFavorite: true // since we've triggered onPress
    }
  };

  const instance = renderer.create(
    <ListItemComponent
      name={name}
      tab={gender}
      favorite={onPressEvent}
      screen={screen}
    />
  ).root;

  instance.findByType(TouchableOpacity).props.onPress();

  expect(onPressEvent).toHaveBeenCalledWith(expectedPayload);
});
