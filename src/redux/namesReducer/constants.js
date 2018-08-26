// the key to which the reducer is assigned when the store is created using 'combinedReducers'
const GLOBAL_STATE_KEY = 'names';
// unique action name prefix
const getAction = name => `${GLOBAL_STATE_KEY}/${name}`;

export const FETCH_NAMES_SUCCESS = getAction('FETCH_NAMES_SUCCESS');
export const FAVORITE_NAME = getAction('FAVORITE_NAME');
export const UNFAVORITE_NAME = getAction('UNFAVORITE_NAME');
