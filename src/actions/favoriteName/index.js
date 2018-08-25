import Actions from '../../constants/Actions';

export default (gender, name) => ({
  type: Actions.favoriteName,
  gender,
  name
});
