export const getNames = (state, { route }) => {
  return state.names[route.key];
};

export const getFavoriteNames = (state, props) => {
  return state.names[route.key].filter(name => name.isFavorite);
};
