import Actions from '../../constants/Actions';

export default (gender, names) => ({
  type: Actions.saveNames,
  gender,
  names
});
