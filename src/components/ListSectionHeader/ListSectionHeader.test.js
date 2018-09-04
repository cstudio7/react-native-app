import React from 'react';
import renderer from 'react-test-renderer';
import ListSectionHeader from './ListSectionHeader';

it('renders correctly', () => {
  const tree = renderer.create(<ListSectionHeader title={'A'} />).toJSON();
  expect(tree).toMatchSnapshot();
});
