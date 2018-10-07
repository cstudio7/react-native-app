export const getNames = (state, { route, screen }) => {
  const names = state.names[route.key];
  if (screen === 'Favorites') {
    return names.filter(name => name.isFavorite);
  }
  return names;
};