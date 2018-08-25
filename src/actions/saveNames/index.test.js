import saveNames from './';
import Actions from '../../constants/Actions';

const mockedName = Object.freeze({ name: 'artur', isFavoite: true });
const mockedNames = Object.freeze(new Array(mockedName));

it('creates a SAVE_NAMES action', () => {
  expect(saveNames('male', mockedNames)).toEqual({
    type: Actions.saveNames,
    gender: 'male',
    names: mockedNames
  });
  expect(saveNames('male', mockedNames)).toMatchSnapshot();
});