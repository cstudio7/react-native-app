import {
  FETCH_NAMES_SUCCESS,
  LISTSCREEN_NAME_FAVORITE,
  FAVSCREEN_NAME_FAVORITE,
  LISTSCREEN_NAME_UNFAVORITE,
  FAVSCREEN_NAME_UNFAVORITE,
  LISTSCREEN_VIEW,
  FAVSCREEN_VIEW,
  LISTSCREEN_SCROLL,
  FAVSCREEN_SCROLL,
  LISTSCREEN_NAME_OPEN,
  FAVSCREEN_NAME_OPEN
} from './constants';

export const fetchNamesSuccess = payload => ({
  type: FETCH_NAMES_SUCCESS,
  payload
});

export const favorite = (screen, payload) => {
  let actionType = '';
  if (screen === 'Favorites') {
    actionType = {
      true: FAVSCREEN_NAME_FAVORITE,
      false: FAVSCREEN_NAME_UNFAVORITE
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
  type: FAVSCREEN_VIEW
});

export const listScreenView = () => ({
  type: LISTSCREEN_VIEW
});

export const favoritesScreenScroll = () => ({
  type: FAVSCREEN_SCROLL
});

export const listScreenScroll = () => ({
  type: LISTSCREEN_SCROLL
});

export const openNameScreen = screen => {
  let type = LISTSCREEN_NAME_OPEN;
  if (screen === 'Favorites') {
    type = FAVSCREEN_NAME_OPEN;
  }
  return { type };
};
