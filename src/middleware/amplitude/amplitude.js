import { Amplitude } from 'expo';
import {
  LISTSCREEN_VIEW,
  FAVSCREEN_VIEW,
  LISTSCREEN_NAME_FAVORITE,
  FAVSCREEN_NAME_FAVORITE,
  LISTSCREEN_NAME_UNFAVORITE,
  FAVSCREEN_NAME_UNFAVORITE,
  FETCH_NAMES_SUCCESS
} from '../../redux/namesReducer/constants';

export const necessaryEvents = [
  LISTSCREEN_VIEW,
  FAVSCREEN_VIEW,
  LISTSCREEN_NAME_FAVORITE,
  FAVSCREEN_NAME_FAVORITE,
  LISTSCREEN_NAME_UNFAVORITE,
  FAVSCREEN_NAME_UNFAVORITE,
  FETCH_NAMES_SUCCESS
];

export default _ => next => action => {
  const { type } = action;
  if (necessaryEvents.includes(type)) {
    Amplitude.logEvent(type);
  }
  return next(action);
};
