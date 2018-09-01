const R = require('ramda');

import {
  FAVORITE_NAME,
  UNFAVORITE_NAME,
  FETCH_NAMES_SUCCESS
} from './constants';
import createReducer from '../../modules/createReducer/createReducer';

const initialState = {
  female: [],
  male: []
};

const updateItemInArray = (state, name, gender) => {
  const genderData = state[gender];
  const index = R.findIndex(R.propEq('id', name.id))(genderData);

  return {
    ...state,
    [gender]: [
      ...genderData.slice(0, index),
      name,
      ...genderData.slice(index + 1)
    ]
  };
};

const mergeGenderNamesWithState = (state, { gender, names }) => {
  return {
    ...state,
    [gender]: state[gender].length
      ? R.uniqBy(item => item.name, R.concat(state[gender], names))
      : names
  };
};

const saveNames = (state, action) =>
  mergeGenderNamesWithState(state, action.payload);

const favoriteName = (state, action) => {
  const { payload, type } = action;
  const newName = {
    ...payload.name,
    isFavorite: type === FAVORITE_NAME
  };
  return updateItemInArray(state, newName, payload.gender);
};

const unfavoriteName = favoriteName;

export default createReducer(initialState, {
  [FETCH_NAMES_SUCCESS]: saveNames,
  [FAVORITE_NAME]: favoriteName,
  [UNFAVORITE_NAME]: unfavoriteName
});
