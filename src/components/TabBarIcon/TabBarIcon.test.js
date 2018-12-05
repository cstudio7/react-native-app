import React from 'react';
import renderer from 'react-test-renderer';
import TabBarIcon from './TabBarIcon';

it('renders heart icon', () => {
  const tree = renderer.create(<TabBarIcon name="md-heart" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders focused heart icon', () => {
  const tree = renderer
    .create(<TabBarIcon name="md-heart" focused={true} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders list icon', () => {
  const tree = renderer.create(<TabBarIcon name="md-list" />).toJSON();
  expect(tree).toMatchSnapshot();
});
