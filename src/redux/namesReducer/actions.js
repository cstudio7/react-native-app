import {
  FAVORITE_NAME,
  UNFAVORITE_NAME,
  FETCH_NAMES_SUCCESS
} from './constants';

export const favoriteName = payload => ({
  type: FAVORITE_NAME,
  payload
});

export const unfavoriteName = payload => ({
  type: UNFAVORITE_NAME,
  payload
});

export const fetchNamesSuccess = payload => ({
  type: FETCH_NAMES_SUCCESS,
  payload
});
