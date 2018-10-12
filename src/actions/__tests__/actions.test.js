import {
  loadNames,
  favorite,
  listScreenView,
  favoritesScreenView,
  scrollEvent,
  openNameScreen,
} from '../actions';

const mockedName = Object.freeze({ name: 'artur', isFavorite: true });

it('creates a FAVSCREEN_NAME_FAVORITE action', () => {
  const payload = { gender: 'male', name: mockedName };
  const screen = 'Favorites';
  expect(favorite(screen, payload)).toMatchSnapshot();
});

it('creates a LISTSCREEN_NAME_UNFAVORITE action', () => {
  const payload = {
    gender: 'male',
    name: {
      name: 'artur',
      isFavorite: false
    }
  };
  const screen = undefined;
  expect(favorite(screen, payload)).toMatchSnapshot();
});

it('creates a LISTSCREEN_VIEW action', () => {
  expect(favoritesScreenView()).toMatchSnapshot();
});

it('creates a FAVSCREEN_VIEW action', () => {
  expect(listScreenView()).toMatchSnapshot();
});

it('creates a LISTSCREEN_SCROLL action', () => {
  expect(scrollEvent()).toMatchSnapshot();
});

it('creates a FAVSCREEN_SCROLL action', () => {
  expect(scrollEvent('Favorites')).toMatchSnapshot();
});

it('creates a LISTSCREEN_NAME_OPEN action', () => {
  expect(openNameScreen()).toMatchSnapshot();
});

it('creates a FAVSCREEN_NAME_OPEN action', () => {
  expect(openNameScreen('Favorites')).toMatchSnapshot();
});

it('creates an action to load names', () => {
  expect(loadNames()).toMatchSnapshot();
});