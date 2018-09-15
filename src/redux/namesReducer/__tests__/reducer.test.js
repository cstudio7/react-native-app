import names from '../reducer';
import {
  LISTSCREEN_NAME_FAVORITE,
  FAVSCREEN_NAME_FAVORITE,
  LISTSCREEN_NAME_UNFAVORITE,
  FAVSCREEN_NAME_UNFAVORITE,
  FETCH_NAMES_SUCCESS
} from '../constants';

it('should return the initial state', () => {
  expect(names(undefined, {})).toMatchSnapshot();
});

describe('FETCH_NAMES_SUCCESS', () => {
  it('should handle the action', () => {
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

  it('should update a state retrieved from a storage', () => {
    const initialState = {
      female: [],
      male: [{ name: 'artur', isFavorite: true }, { name: 'alex' }]
    };

    expect(
      names(initialState, {
        type: FETCH_NAMES_SUCCESS,
        payload: {
          gender: 'male',
          names: [{ name: 'artur' }, { name: 'alex' }, { name: 'pierre' }]
        }
      })
    ).toMatchSnapshot();
  });
});

it('should handle LISTSCREEN_NAME_FAVORITE action', () => {
  const initialState = {
    female: [{ name: 'sveta', isFavorite: true }],
    male: [{ name: 'artur', isFavorite: false }]
  };

  expect(
    names(initialState, {
      type: LISTSCREEN_NAME_FAVORITE,
      payload: {
        gender: 'male',
        name: { name: 'artur', isFavorite: true }
      }
    })
  ).toEqual({
    female: [{ name: 'sveta', isFavorite: true }],
    male: [{ name: 'artur', isFavorite: true }]
  });
});

it('should handle FAVSCREEN_NAME_FAVORITE action', () => {
  const initialState = {
    female: [{ name: 'sveta', isFavorite: true }],
    male: [{ name: 'artur', isFavorite: false }]
  };

  expect(
    names(initialState, {
      type: FAVSCREEN_NAME_FAVORITE,
      payload: {
        gender: 'male',
        name: { name: 'artur', isFavorite: true }
      }
    })
  ).toEqual({
    female: [{ name: 'sveta', isFavorite: true }],
    male: [{ name: 'artur', isFavorite: true }]
  });
});

it('should handle LISTSCREEN_NAME_UNFAVORITE action', () => {
  const initialState = {
    female: [],
    male: [{ name: 'artur', isFavorite: true }]
  };

  expect(
    names(initialState, {
      type: LISTSCREEN_NAME_UNFAVORITE,
      payload: {
        gender: 'male',
        name: { name: 'artur', isFavorite: false }
      }
    })
  ).toMatchSnapshot();
});

it('should handle FAVSCREEN_NAME_UNFAVORITE action', () => {
  const initialState = {
    female: [],
    male: [{ name: 'artur', isFavorite: true }]
  };

  expect(
    names(initialState, {
      type: FAVSCREEN_NAME_UNFAVORITE,
      payload: {
        gender: 'male',
        name: { name: 'artur', isFavorite: false }
      }
    })
  ).toMatchSnapshot();
});
