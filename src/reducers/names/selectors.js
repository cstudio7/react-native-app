import { createSelector } from 'reselect';
import createSection from '../../modules/createSection/createSection';

const getNames = (state, { route, screen }) => {
  const names = state.names[route.key];
  if (screen === 'Favorites') {
    return names.filter(name => name.isFavorite);
  }
  return names;
};

export const makeGetSections = () =>
  createSelector(getNames, names => createSection(names));
