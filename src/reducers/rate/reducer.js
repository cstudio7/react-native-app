import {
  RATE_APP,
  UPDATE_USER_VISITS,
  RESET_USER_VISITS
} from '../../constants/ActionTypes';
import createReducer from '../../modules/createReducer/createReducer';

const initialState = {
  visitsCount: 0,
  rated: false
};

const rate = state => {
  return {
    ...state,
    rated: true,
    visitsCount: 0
  };
};

const updateUserVisits = state => {
  return {
    ...state,
    visitsCount: state.visitsCount + 1
  };
};

const resetUserVisits = state => {
  return {
    ...state,
    visitsCount: 0
  };
};

export default createReducer(initialState, {
  [RATE_APP]: rate,
  [UPDATE_USER_VISITS]: updateUserVisits,
  [RESET_USER_VISITS]: resetUserVisits
});
