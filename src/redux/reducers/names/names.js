const R = require('ramda');

import Actions from '../../../constants/Actions';

export const initialState = {
  female: [],
  male: []
};

const updateName = (name, gender, state) => {
  const genderData = state[gender];
  const index = R.findIndex(R.propEq('id', name.id))(genderData);

  return {
    ...state,
    [gender]: [...genderData.slice(0, index), name, ...genderData.slice(index + 1)]
  };
};

export default (state = initialState, action) => {
  const { type, gender } = action;

  if (type === Actions.saveNames) {
    return {
      ...state,
      [gender]: R.uniq([...state[gender], ...action.names])
    };
  }

  if (type === Actions.favoriteName) {
    return updateName({ ...action.name, isFavorite: true }, gender, state);
  }

  if (type === Actions.unfavoriteName) {
    return updateName({ ...action.name, isFavorite: false }, gender, state);
  }

  return state;
};
