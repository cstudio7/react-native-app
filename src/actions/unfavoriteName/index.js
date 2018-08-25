import Actions from '../../constants/Actions';

export default (gender, name) => ({
  type: Actions.unfavoriteName,
  gender,
  name
});
