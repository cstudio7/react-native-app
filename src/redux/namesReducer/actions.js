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
  FAVSCREEN_NAME_OPEN,
  LISTSCREEN_FEMALETAB_PRESS,
  LISTSCREEN_MALETAB_PRESS,
  FAVSCREEN_FEMALETAB_PRESS,
  FAVSCREEN_MALETAB_PRESS
} from './constants';

const isScreenFavorites = screen => screen === 'Favorites';

export const fetchNamesSuccess = payload => ({
  type: FETCH_NAMES_SUCCESS,
  payload
});

export const favoritesScreenView = () => ({
  type: FAVSCREEN_VIEW
});

export const listScreenView = () => ({
  type: LISTSCREEN_VIEW
});

export const favorite = (screen, payload) => {
  let actionType = '';
  if (isScreenFavorites(screen)) {
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

export const scrollEvent = screen => {
  let type = LISTSCREEN_SCROLL;
  if (isScreenFavorites(screen)) {
    type = FAVSCREEN_SCROLL;
  }
  return { type };
};

export const openNameScreen = screen => {
  let type = LISTSCREEN_NAME_OPEN;
  if (isScreenFavorites(screen)) {
    type = FAVSCREEN_NAME_OPEN;
  }
  return { type };
};

export const changeActiveTab = (screen, activeTab) => {
  const activeTabName = activeTab.key;
  let actionType = '';
  if (isScreenFavorites(screen)) {
    actionType = {
      female: FAVSCREEN_FEMALETAB_PRESS,
      male: FAVSCREEN_MALETAB_PRESS
    }[activeTabName];
  } else {
    actionType = {
      female: LISTSCREEN_FEMALETAB_PRESS,
      male: LISTSCREEN_MALETAB_PRESS
    }[activeTabName];
  }

  return {
    type: actionType
  };
};
