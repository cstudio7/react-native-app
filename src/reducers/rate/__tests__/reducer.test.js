import rate from '../reducer';
import {
  RATE_APP,
  UPDATE_USER_VISITS,
  RESET_USER_VISITS
} from '../../../constants/ActionTypes';

it('returns the initial state', () => {
  expect(rate(undefined, {})).toMatchSnapshot();
});

it('update user visits counter', () => {
  const initialState = {
    rated: true,
    visitsCount: 0
  };

  expect(
    rate(initialState, {
      type: UPDATE_USER_VISITS
    })
  ).toEqual({
    rated: true,
    visitsCount: 1
  })
});

it('resets user visits', () => {
  const initialState = {
    rated: false,
    visitsCount: 3
  };

  expect(
    rate(initialState, {
      type: RESET_USER_VISITS
    })
  ).toEqual({
    rated: false,
    visitsCount: 0
  })
});

it('handles RATE_APP action and marks app as rated', () => {
  const initialState = {
    rated: false,
    visitsCount: 0
  };

  expect(
    rate(initialState, {
      type: RATE_APP
    })
  ).toMatchSnapshot();
});
