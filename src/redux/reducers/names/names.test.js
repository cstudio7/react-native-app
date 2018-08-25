import names, { initialState } from './names';
import Actions from '../../../constants/Actions';

it('should return the initial state', () => {
  expect(names(undefined, {})).toMatchSnapshot();
});

it('should handle SAVE_NAMES action', () => {
  expect(
    names(initialState, {
      type: Actions.saveNames,
      gender: 'male',
      names: [{ name: 'artur', isFavorite: true }]
    })
  ).toMatchSnapshot();
});

it('should handle FAVORITE_NAME action', () => {
  const state = {
    female: [],
    male: [{ name: 'artur', isFavorite: false }]
  };

  expect(
    names(state, {
      type: Actions.favoriteName,
      gender: 'male',
      name: { name: 'artur', isFavorite: false }
    })
  ).toMatchSnapshot();
});

it('should handle UNFAVORITE_NAME action', () => {
  const state = {
    female: [],
    male: [{ name: 'artur', isFavorite: true }]
  };

  expect(
    names(state, {
      type: Actions.unfavoriteName,
      gender: 'male',
      name: { name: 'artur', isFavorite: true }
    })
  ).toMatchSnapshot();
});
