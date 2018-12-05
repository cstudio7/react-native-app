import React from 'react';
import { Provider } from 'react-redux';
import { FlatList, Keyboard } from 'react-native';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import List from './List';

const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore({});

const mockData = [
  { id: 1, name: 'artur' },
  { id: 2, name: 'alex' },
  { id: 3, name: 'pierre' }
];

const renderElement = (store, props) => {
  return renderer.create(
    <Provider store={store}>
      <List {...props} />
    </Provider>
  );
};

const getTree = (store, props) => {
  return renderElement(store, props).toJSON();
};

const getInstance = (store, props) => {
  return renderElement(store, props).root;
};

it('renders list of 3 items', () => {
  const props = {
    tab: 'male',
    screen: 'Favorites',
    data: mockData
  };

  const tree = getTree(store, props);
  expect(tree).toMatchSnapshot();
});

it('triggers scrollEvent when the user scrolls', () => {
  const scrollEvent = jest.fn();
  const props = {
    tab: 'male',
    screen: 'Favorites',
    data: mockData,
    scrollEvent
  };

  const instance = getInstance(store, props);
  instance.findByType(FlatList).props.onScrollBeginDrag();
  expect(scrollEvent).toHaveBeenCalled();
});

it('closes keyboard when the user scrolls', () => {
  jest.mock('Keyboard');

  const props = {
    tab: 'male',
    screen: 'Favorites',
    data: mockData,
    scrollEvent: jest.fn()
  };

  const instance = getInstance(store, props);
  instance.findByType(FlatList).props.onScrollBeginDrag();
  expect(Keyboard.dismiss).toHaveBeenCalled();
});

