import { combineReducers } from 'redux';
import names from '../namesReducer/reducer';

const rootReducer = combineReducers({
  names
});

export default rootReducer;
