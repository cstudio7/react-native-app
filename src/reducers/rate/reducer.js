import {
  LISTSCREEN_RATEALERT_RATE,
  LISTSCREEN_RATEALERT_UPDATEVISITS,
  LISTSCREEN_RATEALERT_RESETVISITS
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
  [LISTSCREEN_RATEALERT_RATE]: rate,
  [LISTSCREEN_RATEALERT_UPDATEVISITS]: updateUserVisits,
  [LISTSCREEN_RATEALERT_RESETVISITS]: resetUserVisits
});
