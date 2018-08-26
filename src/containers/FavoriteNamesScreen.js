import { connect } from 'react-redux';

import { fetchNamesSuccess } from '../redux/namesReducer/actions';
import FavoriteNamesScreen from '../screens/FavoriteNamesScreen';

const mapStateToProps = state => ({
  names: state.names
});

export default connect(
  mapStateToProps,
  {
    fetchNamesSuccess
  }
)(FavoriteNamesScreen);
