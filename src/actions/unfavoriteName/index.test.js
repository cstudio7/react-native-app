import unfavoriteName from './';
import Actions from '../../constants/Actions';

const mockedName = Object.freeze({ name: 'artur', isFavoite: true });
const mockedNames = Object.freeze(new Array(mockedName));

it('creates a UNFAVORITE_NAME action', () => {
  expect(unfavoriteName('female', mockedName)).toEqual({
    type: Actions.unfavoriteName,
    gender: 'female',
    name: mockedName
  });
  expect(unfavoriteName('female', mockedName)).toMatchSnapshot();
});
