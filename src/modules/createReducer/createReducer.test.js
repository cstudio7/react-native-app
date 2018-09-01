import createReducer from './createReducer';

it('creates reducers correctly', () => {
  const initialState = [1];
  const handler = (state, action) => [...state, ...action.payload.data];
  const reducer = createReducer(initialState, { MY_TEST_ACTION: handler });
  expect(
    reducer(initialState, {
      type: 'MY_TEST_ACTION',
      payload: { data: [2, 3] }
    })
  ).toMatchSnapshot();
});
