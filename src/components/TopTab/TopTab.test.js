import React from 'react';
import renderer from 'react-test-renderer';

import TopTab from './TopTab';

const mockedTabs = Object.freeze([
  {
    name: 'Женские имена',
    onPress: () => {},
    isActive: true
  },
  {
    name: 'Мужские имена',
    onPress: () => {},
    isActive: false
  }
]);

it('renders correctly', () => {
  const tree = renderer
    .create(<TopTab tabs={mockedTabs} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
