const R = require('ramda');

import {
  FAVORITE_NAME,
  UNFAVORITE_NAME,
  FETCH_NAMES_SUCCESS
} from './constants';

const initialState = {
  female: [],
  male: []
};

const updateName = (name, gender, state) => {
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

export default (state = initialState, action) => {
  const { type } = action;

  if (type === FETCH_NAMES_SUCCESS) {
    return {
      ...state,
      [action.payload.gender]: R.uniq([
        ...state[action.payload.gender],
        ...action.payload.names
      ])
    };
  }

  if (type === FAVORITE_NAME) {
    return updateName(
      { ...action.payload.name, isFavorite: true },
      action.payload.gender,
      state
    );
  }

  if (type === UNFAVORITE_NAME) {
    return updateName(
      { ...action.payload.name, isFavorite: false },
      action.payload.gender,
      state
    );
  }

  return state;
};
