import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import ListWithSearchForm from './ListWithSearchForm';

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
        <ListWithSearchForm {...props} />
      </Provider>
    )
    .toJSON();
};

it('renders empty list correctly', () => {
  const props = {
    screen: 'List',
    data: [],
    tab: 'female',
    scrollEvent: jest.fn()
  };

  const tree = getTree(store, props);
  expect(tree).toMatchSnapshot();
});

it('renders list correctly', () => {
  const props = {
    screen: 'List',
    data: mockData,
    tab: 'male',
    scrollEvent: jest.fn()
  };

  const tree = getTree(store, props);
  expect(tree).toMatchSnapshot();
});
