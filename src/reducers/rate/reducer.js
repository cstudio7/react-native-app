import {
  LISTSCREEN_RATEALERT_RATE,
  LISTSCREEN_RATEALERT_UPDATEVISITS,
  LISTSCREEN_RATEALERT_RESETVISITS
} from '../../constants/ActionTypes';

const initialState = {
  visitsCount: 0,
  rated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LISTSCREEN_RATEALERT_RATE:
      return {
        ...state,
        rated: true,
        visitsCount: 0
      };

    case LISTSCREEN_RATEALERT_UPDATEVISITS:
      return {
        ...state,
        visitsCount: state.visitsCount + 1
      };

    case LISTSCREEN_RATEALERT_RESETVISITS:
      return {
        ...state,
        visitsCount: 0
      };

    default:
      return state;
  }
};
