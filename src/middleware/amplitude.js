import { Amplitude } from 'expo';
import {
  LISTSCREEN_NAME_FAVORITE,
  FAVSCREEN_NAME_FAVORITE,
  LISTSCREEN_NAME_UNFAVORITE,
  FAVSCREEN_NAME_UNFAVORITE,
  FETCH_NAMES_SUCCESS
} from '../redux/namesReducer/actions';

const eventsToLog = [
  LISTSCREEN_NAME_FAVORITE,
  FAVSCREEN_NAME_FAVORITE,
  LISTSCREEN_NAME_UNFAVORITE,
  FAVSCREEN_NAME_UNFAVORITE,
  FETCH_NAMES_SUCCESS
];

export default _ => next => action => {
  const { type } = action;
  if (eventsToLog.includes(type)) {
    Amplitude.logEvent(action.type);
  }
  return next(action);
};
