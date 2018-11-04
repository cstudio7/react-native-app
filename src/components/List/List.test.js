import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import List from './List';

const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore({});

it('renders list correctly', () => {
  const data = [
    { id: 1, name: 'artur' },
    { id: 2, name: 'alex' },
    { id: 3, name: 'pierre' }
  ];

  const props = {
    screen: 'Favorites',
    data,
    route: { key: 'male' },
    scrollEvent: jest.fn()
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
    data: [],
    route: { key: 'female' },
    scrollEvent: jest.fn()
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
