import rate from '../reducer';
import {
  LISTSCREEN_RATEALERT_RATE,
  LISTSCREEN_RATEALERT_UPDATEVISITS,
  LISTSCREEN_RATEALERT_RESETVISITS
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
      type: LISTSCREEN_RATEALERT_UPDATEVISITS
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
      type: LISTSCREEN_RATEALERT_RESETVISITS
    })
  ).toEqual({
    rated: false,
    visitsCount: 0
  })
});

it('marks app as rated', () => {
  const initialState = {
    rated: false,
    visitsCount: 0
  };

  expect(
    rate(initialState, {
      type: LISTSCREEN_RATEALERT_RATE
    })
  ).toMatchSnapshot();
});
