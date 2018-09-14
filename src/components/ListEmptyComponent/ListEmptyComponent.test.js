import React from 'react';
import renderer from 'react-test-renderer';
import ListEmptyComponent from './ListEmptyComponent';

it('renders correctly', () => {
  const tree = renderer.create(<ListEmptyComponent />).toJSON();
  expect(tree).toMatchSnapshot();
});
