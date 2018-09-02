import React from 'react';
import renderer from 'react-test-renderer';

import Tab from './Tab';

const mockedTab = Object.freeze({
  name: 'Девочки',
  onPress: () => {},
  isActive: true
});

it('renders correctly', () => {
  const tree = renderer.create(<Tab tab={mockedTab} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders active tab', () => {
  const tree = renderer
    .create(<Tab tab={{ ...mockedTab, isActive: false }} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
