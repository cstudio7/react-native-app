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
    tab: 'female'
  };
  expect(getNames(state, props)).toMatchSnapshot();
});

it('returns male names', () => {
  const props = {
    tab: 'male'
  };
  expect(getNames(state, props)).toMatchSnapshot();
});
