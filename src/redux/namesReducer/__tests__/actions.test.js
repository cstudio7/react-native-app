import {
  fetchNamesSuccess,
  favorite,
  favoritesScreenView,
  listScreenView
} from '../actions';

const mockedName = Object.freeze({ name: 'artur', isFavorite: true });

it('creates a FETCH_NAMES_SUCCESS action', () => {
  const mockedNames = Object.freeze([mockedName]);
  expect(
    fetchNamesSuccess({ gender: 'male', names: mockedNames })
  ).toMatchSnapshot();
});

it('creates a FAVORITESSCREEN_NAME_FAVORITE action', () => {
  const payload = { gender: 'male', name: mockedName };
  const screen = 'Favorites';
  expect(favorite(payload, screen)).toMatchSnapshot();
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
  expect(favorite(payload, screen)).toMatchSnapshot();
});

it('creates a LISTSCREEN_VIEW action', () => {
  expect(favoritesScreenView()).toMatchSnapshot();
});

it('creates a FAVORITESSCREEN_VIEW action', () => {
  expect(listScreenView()).toMatchSnapshot();
});
