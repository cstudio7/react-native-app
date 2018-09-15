import React from 'react';
import renderer from 'react-test-renderer';
import ListEmptyComponent from './ListEmptyComponent';

it('renders correctly for List screen', () => {
  const tree = renderer.create(<ListEmptyComponent screen="List" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly for Favorites screen', () => {
  const tree = renderer
    .create(<ListEmptyComponent screen="Favorites" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
