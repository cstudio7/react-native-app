import { filterFavorites } from '../selectors';

it('filters favorited names', () => {
  const names = {
    female: [],
    male: [
      { name: 'artur', isFavorite: true },
      { name: 'alex', isFavorite: false },
      { name: 'pierre' }
    ]
  };

  expect(filterFavorites(names)).toMatchSnapshot();
});
