import { combineReducers } from 'redux';
import names from './names/reducer';

const rootReducer = combineReducers({
  names
});

export default rootReducer;
