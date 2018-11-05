import { combineReducers } from 'redux';
import names from './names/reducer';
import rate from './rate/reducer';

const rootReducer = combineReducers({
  names,
  rate
});

export default rootReducer;
