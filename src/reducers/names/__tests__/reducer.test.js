import names from '../reducer';
import {
  LISTSCREEN_NAME_FAVORITE,
  FAVSCREEN_NAME_FAVORITE,
  LISTSCREEN_NAME_UNFAVORITE,
  FAVSCREEN_NAME_UNFAVORITE,
  FETCH_NAMES_SUCCESS
} from '../../../constants/ActionTypes';

it('should return the initial state', () => {
  expect(names(undefined, {})).toMatchSnapshot();
});

describe('FETCH_NAMES_SUCCESS', () => {
  it('updates female names', () => {
    const initialState = {
      female: [],
      male: []
    };

    expect(
      names(initialState, {
        type: FETCH_NAMES_SUCCESS,
        response: {
          femaleNames: [{ id: 1, name: 'sveta', isFavorite: true }]
        }
      })
    ).toMatchSnapshot();
  });

  it('updates male names', () => {
    const initialState = {
      female: [],
      male: []
    };

    expect(
      names(initialState, {
        type: FETCH_NAMES_SUCCESS,
        response: {
          maleNames: [{ id: 1, name: 'artur', isFavorite: true }]
        }
      })
    ).toMatchSnapshot();
  });

  it('updates state retrieved from a storage', () => {
    const initialState = {
      female: [],
      male: [
        { id: 1, name: 'artur', isFavorite: true },
        { id: 2, name: 'alex' }
      ]
    };

    expect(
      names(initialState, {
        type: FETCH_NAMES_SUCCESS,
        response: {
          maleNames: [
            { id: 1, name: 'artur', meaning: 'bla' },
            { id: 2, name: 'alex', meaning: 'bla bla' },
            { id: 3, name: 'pierre', meaning: 'bla bla bla' }
          ]
        }
      })
    ).toMatchSnapshot();
  });
});

it('should handle LISTSCREEN_NAME_FAVORITE action', () => {
  const initialState = {
    female: [{ id: 1, name: 'sveta', isFavorite: true }],
    male: [{ id: 1, name: 'artur', isFavorite: false }]
  };

  expect(
    names(initialState, {
      type: LISTSCREEN_NAME_FAVORITE,
      payload: {
        gender: 'male',
        name: { id: 1, name: 'artur', isFavorite: true }
      }
    })
  ).toMatchSnapshot();
});

it('should handle FAVSCREEN_NAME_FAVORITE action', () => {
  const initialState = {
    female: [{ id: 1, name: 'sveta', isFavorite: true }],
    male: [{ id: 1, name: 'artur', isFavorite: false }]
  };

  expect(
    names(initialState, {
      type: FAVSCREEN_NAME_FAVORITE,
      payload: {
        gender: 'male',
        name: { id: 1, name: 'artur', isFavorite: true }
      }
    })
  ).toMatchSnapshot();
});

it('should handle LISTSCREEN_NAME_UNFAVORITE action', () => {
  const initialState = {
    female: [],
    male: [{ id: 1, name: 'artur', isFavorite: true }]
  };

  expect(
    names(initialState, {
      type: LISTSCREEN_NAME_UNFAVORITE,
      payload: {
        gender: 'male',
        name: { id: 1, name: 'artur', isFavorite: false }
      }
    })
  ).toMatchSnapshot();
});

it('should handle FAVSCREEN_NAME_UNFAVORITE action', () => {
  const initialState = {
    female: [],
    male: [{ id: 1, name: 'artur', isFavorite: true }]
  };

  expect(
    names(initialState, {
      type: FAVSCREEN_NAME_UNFAVORITE,
      payload: {
        gender: 'male',
        name: { id: 1, name: 'artur', isFavorite: false }
      }
    })
  ).toMatchSnapshot();
});
