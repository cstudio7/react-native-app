const R = require('ramda');

import {
  LISTSCREEN_NAME_FAVORITE,
  FAVSCREEN_NAME_FAVORITE,
  LISTSCREEN_NAME_UNFAVORITE,
  FAVSCREEN_NAME_UNFAVORITE,
  FETCH_NAMES_SUCCESS
} from '../../constants/constants';
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

const mergeGenderNamesWithState = (state, response) => {
  const gender = response.femaleNames ? 'female' : 'male';
  if (!R.path([gender, 'length'], state)) {
    return {
      ...state,
      [gender]: response.femaleNames || response.maleNames
    };
  }

  return {
    ...state,
    [gender]: (response.femaleNames || response.maleNames).map(name =>
      R.mergeAll([
        name,
        state[gender].find(stateName => stateName.name === name.name)
      ])
    )
  };
};

const saveNames = (state, action) =>
  mergeGenderNamesWithState(state, action.response);

const favoriteName = (state, action) => {
  const { payload, type } = action;
  const newName = {
    ...payload.name,
    isFavorite:
      type === FAVSCREEN_NAME_FAVORITE || type === LISTSCREEN_NAME_FAVORITE
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
