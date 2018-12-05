import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import AnimatedList from './AnimatedList';

const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore({});

const mockData = [
  { id: 1, name: 'artur' },
  { id: 2, name: 'alex' },
  { id: 3, name: 'pierre' }
];

const getTree = (store, props) => {
  return renderer
    .create(
      <Provider store={store}>
        <AnimatedList {...props} />
      </Provider>
    )
    .toJSON();
};

it('renders empty list correctly', () => {
  const props = {
    screen: 'List',
    data: [],
    route: { key: 'female' },
    scrollEvent: jest.fn()
  };

  const tree = getTree(store, props);
  expect(tree).toMatchSnapshot();
});

it('renders list correctly', () => {
  const props = {
    screen: 'List',
    data: mockData,
    route: { key: 'female' },
    scrollEvent: jest.fn()
  };

  const tree = getTree(store, props);
  expect(tree).toMatchSnapshot();
});

it('renders empty favorites list correctly', () => {
  const props = {
    screen: 'Favorites',
    data: [],
    route: { key: 'female' },
    scrollEvent: jest.fn()
  };

  const tree = getTree(store, props);
  expect(tree).toMatchSnapshot();
});

it('renders favorites list correctly', () => {
  const props = {
    screen: 'Favorites',
    data: mockData,
    route: { key: 'female' },
    scrollEvent: jest.fn()
  };

  const tree = getTree(store, props);
  expect(tree).toMatchSnapshot();
});
