import React from 'react';
import renderer from 'react-test-renderer';
import ListEmptyComponent from './ListEmptyComponent';

it('shows passed text', () => {
  const tree = renderer
    .create(<ListEmptyComponent message="Загружается..." />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});