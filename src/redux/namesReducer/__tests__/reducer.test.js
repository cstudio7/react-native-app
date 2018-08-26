import names from '../reducer';
import {
  FAVORITE_NAME,
  UNFAVORITE_NAME,
  FETCH_NAMES_SUCCESS
} from '../constants';

it('should return the initial state', () => {
  expect(names(undefined, {})).toMatchSnapshot();
});

it('should handle names/SAVE_NAMES action', () => {
  const initialState = {
    female: [],
    male: []
  };

  expect(
    names(initialState, {
      type: FETCH_NAMES_SUCCESS,
      payload: {
        gender: 'male',
        names: [{ name: 'artur', isFavorite: true }]
      }
    })
  ).toMatchSnapshot();
});

it('should handle names/FAVORITE_NAME action', () => {
  const initialState = {
    female: [],
    male: [{ name: 'artur', isFavorite: false }]
  };

  expect(
    names(initialState, {
      type: FAVORITE_NAME,
      payload: {
        gender: 'male',
        name: { name: 'artur', isFavorite: false }
      }
    })
  ).toMatchSnapshot();
});

it('should handle names/UNFAVORITE_NAME action', () => {
  const initialState = {
    female: [],
    male: [{ name: 'artur', isFavorite: true }]
  };

  expect(
    names(initialState, {
      type: UNFAVORITE_NAME,
      payload: {
        gender: 'male',
        name: { name: 'artur', isFavorite: true }
      }
    })
  ).toMatchSnapshot();
});
