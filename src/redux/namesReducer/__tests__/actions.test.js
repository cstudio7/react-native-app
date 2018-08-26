import { fetchNamesSuccess, favoriteName, unfavoriteName } from '../actions';

const mockedName = Object.freeze({ name: 'artur', isFavoite: true });

it('creates a names/SAVE_NAMES action', () => {
  const mockedNames = Object.freeze(new Array(mockedName));
  expect(
    fetchNamesSuccess({ gender: 'male', names: mockedNames })
  ).toMatchSnapshot();
});

it('creates a names/FAVORITE_NAME action', () => {
  expect(favoriteName({ gender: 'male', name: mockedName })).toMatchSnapshot();
});

it('creates a names/UNFAVORITE_NAME action', () => {
  expect(
    unfavoriteName({ gender: 'female', name: mockedName })
  ).toMatchSnapshot();
});
