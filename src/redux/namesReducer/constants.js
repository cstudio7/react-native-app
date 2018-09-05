// the key to which the reducer is assigned when the store is created using 'combinedReducers'
const GLOBAL_STATE_KEY = 'names';
// unique action name prefix
const getAction = name => `${GLOBAL_STATE_KEY}/${name}`;

export const FETCH_NAMES_SUCCESS = getAction('FETCH_NAMES_SUCCESS');

export const FAVSCREEN_NAME_FAVORITE = getAction('FAVSCREEN_NAME_FAVORITE');
export const FAVSCREEN_NAME_UNFAVORITE = getAction('FAVSCREEN_NAME_UNFAVORITE');

export const LISTSCREEN_NAME_FAVORITE = getAction('LISTSCREEN_NAME_FAVORITE');
export const LISTSCREEN_NAME_UNFAVORITE = getAction(
  'LISTSCREEN_NAME_UNFAVORITE'
);
