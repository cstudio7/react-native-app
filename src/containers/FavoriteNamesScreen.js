import { connect } from 'react-redux';

import saveNames from '../actions/saveNames';
import FavoriteNamesScreen from '../screens/FavoriteNamesScreen';

const mapStateToProps = (state) => ({
  names: state.names
});

export default connect(
  mapStateToProps,
  {
    saveNames
  }
)(FavoriteNamesScreen);
