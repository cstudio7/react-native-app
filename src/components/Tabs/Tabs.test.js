import React from 'react';
import { Text } from 'react-native';
import renderer from 'react-test-renderer';

import Tabs from './Tabs';

it('renders correctly', () => {
  const tree = renderer
    .create(
      <Tabs>
        <Text>Hello, world!</Text>
      </Tabs>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
