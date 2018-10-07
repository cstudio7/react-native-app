import { getNames } from '../selectors';

const names = Object.freeze({
  female: [{ name: 'sveta', isFavorite: true }],
  male: [{ name: 'artur', isFavorite: true }, { name: 'pierre' }]
});

const state = Object.freeze({
  names
});

it('returns female names', () => {
  const props = {
    route: { key: 'female' }
  };
  expect(getNames(state, props)).toMatchSnapshot();
});

it('returns male names', () => {
  const props = {
    route: { key: 'male' }
  };
  expect(getNames(state, props)).toMatchSnapshot();
});

it('returns favorite female data', () => {
  const props = {
    route: { key: 'female' },
    screen: 'Favorites'
  };
  expect(getNames(state, props)).toMatchSnapshot();
});

it('returns favorite male data', () => {
  const props = {
    route: { key: 'male' },
    screen: 'Favorites'
  };
  expect(getNames(state, props)).toMatchSnapshot();
});