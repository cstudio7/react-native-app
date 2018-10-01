import { makeGetSections } from '../selectors';

const names = Object.freeze({
  female: [{ name: 'sveta', isFavorite: true }],
  male: [{ name: 'artur', isFavorite: true }, { name: 'pierre' }]
});

const state = Object.freeze({
  names
});

it('returns female sections', () => {
  const props = {
    route: { key: 'female' }
  };
  const getSections = makeGetSections();
  expect(getSections(state, props)).toMatchSnapshot();
});

it('returns male sections', () => {
  const props = {
    route: { key: 'male' }
  };
  const getSections = makeGetSections();
  expect(getSections(state, props)).toMatchSnapshot();
});

it('returns favorite female sections', () => {
  const props = {
    route: { key: 'female' },
    screen: 'Favorites'
  };
  const getSections = makeGetSections();
  expect(getSections(state, props)).toMatchSnapshot();
});

it('returns favorite male sections', () => {
  const props = {
    route: { key: 'male' },
    screen: 'Favorites'
  };
  const getSections = makeGetSections();
  expect(getSections(state, props)).toMatchSnapshot();
});