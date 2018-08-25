import favoriteName from './favoriteName';
import Actions from '../../constants/Actions';

const mockedName = Object.freeze({ name: 'artur', isFavoite: true });
const mockedNames = Object.freeze(new Array(mockedName));

it('creates a FAVORITE_NAME action', () => {
  expect(favoriteName('male', mockedName)).toEqual({
    type: Actions.favoriteName,
    gender: 'male',
    name: mockedName
  });
  expect(favoriteName('male', mockedName)).toMatchSnapshot();
});
