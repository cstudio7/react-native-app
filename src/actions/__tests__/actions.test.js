import {
  loadNames,
  favorite,
  listScreenView,
  favoritesScreenView,
  scrollEvent,
  openNameScreen,
  showRateAppAlert,
  rateApp,
  updateUserVisits,
  resetUserVisits
} from '../actions';


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

it('creates a LISTSCREEN_RATEALERT_SHOW action', () => {
  expect(showRateAppAlert()).toMatchSnapshot();
});

it('creates a LISTSCREEN_RATEALERT_RATE action', () => {
  expect(rateApp()).toMatchSnapshot();
});

it('creates a LISTSCREEN_RATEALERT_UPDATEVISITS action', () => {
  expect(updateUserVisits()).toMatchSnapshot();
});

it('creates a LISTSCREEN_RATEALERT_RESETVISITS action', () => {
  expect(resetUserVisits()).toMatchSnapshot();
});
