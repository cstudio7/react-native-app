import {
  FETCH_NAMES_SUCCESS,
  LISTSCREEN_NAME_FAVORITE,
  FAVORITESSCREEN_NAME_FAVORITE,
  LISTSCREEN_NAME_UNFAVORITE,
  FAVORITESSCREEN_NAME_UNFAVORITE,
  LISTSCREEN_VIEW,
  FAVORITESSCREEN_VIEW
} from './constants';

export const fetchNamesSuccess = payload => ({
  type: FETCH_NAMES_SUCCESS,
  payload
});

export const favorite = (payload, screen) => {
  let actionType = '';
  if (screen === 'Favorites') {
    actionType = {
      true: FAVORITESSCREEN_NAME_FAVORITE,
      false: FAVORITESSCREEN_NAME_UNFAVORITE
    }[payload.name.isFavorite];
  } else {
    actionType = {
      true: LISTSCREEN_NAME_FAVORITE,
      false: LISTSCREEN_NAME_UNFAVORITE
    }[payload.name.isFavorite];
  }

  return {
    type: actionType,
    payload
  };
};

export const favoritesScreenView = () => ({
  type: FAVORITESSCREEN_VIEW
});

export const listScreenView = () => ({
  type: LISTSCREEN_VIEW
});
