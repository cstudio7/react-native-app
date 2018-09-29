import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import List from './List';

const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore({});

jest.mock('lodash.throttle', () => jest.fn(fn => fn));

it('renders list correctly', () => {
  const sections = [
    {
      title: 'a',
      data: [{ id: 1, name: 'artur' }, { id: 2, name: 'alex' }]
    },
    {
      title: 'p',
      data: [{ id: 3, name: 'pierre' }]
    }
  ];

  const props = {
    screen: 'Favorites',
    sections,
    route: { key: 'male' }
  };

  const tree = renderer
    .create(
      <Provider store={store}>
        <List {...props} />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it('shows blank state if list is empty', () => {
  const props = {
    sections: [],
    route: { key: 'female' }
  };

  const tree = renderer
    .create(
      <Provider store={store}>
        <List {...props} />
      </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
