import { createStore } from 'redux';

import rootReducer from '../';

const store = createStore(rootReducer);

it('checks that initial state of the root reducer matches what child reducers return given an empty action', () => {
  expect(store.getState()).toMatchSnapshot();
});