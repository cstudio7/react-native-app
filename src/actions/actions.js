import {
  FETCH_NAMES_REQUEST,
  FETCH_NAMES_SUCCESS,
  FETCH_NAMES_FAIL,
  LISTSCREEN_NAME_FAVORITE,
  FAVSCREEN_NAME_FAVORITE,
  LISTSCREEN_NAME_UNFAVORITE,
  FAVSCREEN_NAME_UNFAVORITE,
  LISTSCREEN_NAME_OPEN,
  FAVSCREEN_NAME_OPEN,
  LISTSCREEN_FEMALETAB_PRESS,
  LISTSCREEN_MALETAB_PRESS,
  FAVSCREEN_FEMALETAB_PRESS,
  FAVSCREEN_MALETAB_PRESS,
  LISTSCREEN_VIEW,
  FAVSCREEN_VIEW,
  LISTSCREEN_SCROLL,
  FAVSCREEN_SCROLL
} from '../constants/constants';
import gql from 'graphql-tag';
import { CALL_API } from '../constants/Api';

const isScreenFavorites = screen => screen === 'Favorites';

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

const fetchNames = query => ({
  [CALL_API]: {
    types: [FETCH_NAMES_REQUEST, FETCH_NAMES_SUCCESS, FETCH_NAMES_FAIL],
    query
  }
});

const femaleNamesQuery = gql`
  {
    femaleNames {
      id
      name
      meaning
    }
  }
`;

const maleNamesQuery = gql`
  {
    maleNames {
      id
      name
      meaning
    }
  }
`;

export const loadNames = gender => dispatch => {
  const query = gender === 'female' ? femaleNamesQuery : maleNamesQuery;
  return dispatch(fetchNames(query));
};
