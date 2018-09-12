import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';
import List from './List';

const middlewares = [];
const mockStore = configureStore(middlewares);
const store = mockStore({});

it('renders correctly', () => {
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
