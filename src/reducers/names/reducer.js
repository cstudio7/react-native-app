const R = require('ramda');

import {
  LISTSCREEN_NAME_FAVORITE,
  LISTSCREEN_NAME_UNFAVORITE,
  FAVSCREEN_NAME_UNFAVORITE,
  FETCH_NAMES_SUCCESS
} from '../../constants/ActionTypes';

const initialState = {
  female: [],
  male: []
};

const updateItemInArray = (state, name, gender) => {
  const genderNames = state[gender];
  const index = R.findIndex(R.propEq('name', name.name))(genderNames);

  return {
    ...state,
    [gender]: [
      ...genderNames.slice(0, index),
      name,
      ...genderNames.slice(index + 1)
    ]
  };
};

const mergeGenderNamesWithState = (state, genderNames = [], gender) => {
  if (!R.path([gender, 'length'], state)) {
    return genderNames;
  }

  return genderNames.map(name =>
    R.mergeAll([
      name,
      state[gender].find(stateName => stateName.name === name.name)
    ])
  );
};

const saveNames = (state, action) => {
  const { response } = action;
  const { female, male } = response;
  return {
    female: mergeGenderNamesWithState(state, female, 'female'),
    male: mergeGenderNamesWithState(state, male, 'male')
  };
};

const favoriteName = (state, action) => {
  const { payload } = action;
  return updateItemInArray(state, payload.name, payload.gender);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NAMES_SUCCESS:
      return saveNames(state, action);
    case LISTSCREEN_NAME_FAVORITE:
    case LISTSCREEN_NAME_UNFAVORITE:
    case FAVSCREEN_NAME_UNFAVORITE:
      return favoriteName(state,action);
    case 'decrement':
      return {count: state.count - 1};
    default:
      // A reducer must always return a valid state.
      // Alternatively you can throw an error if an invalid action is dispatched.
      return state;
  }
}
