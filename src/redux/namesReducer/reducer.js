const R = require('ramda');

import {
  LISTSCREEN_NAME_FAVORITE,
  FAVSCREEN_NAME_FAVORITE,
  LISTSCREEN_NAME_UNFAVORITE,
  FAVSCREEN_NAME_UNFAVORITE,
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
    isFavorite: (type === FAVSCREEN_NAME_FAVORITE) || (type === LISTSCREEN_NAME_FAVORITE)
  };
  return updateItemInArray(state, newName, payload.gender);
};

const unfavoriteName = favoriteName;

export default createReducer(initialState, {
  [FETCH_NAMES_SUCCESS]: saveNames,
  [LISTSCREEN_NAME_FAVORITE]: favoriteName,
  [FAVSCREEN_NAME_FAVORITE]: favoriteName,
  [LISTSCREEN_NAME_UNFAVORITE]: unfavoriteName,
  [FAVSCREEN_NAME_UNFAVORITE]: unfavoriteName
});
