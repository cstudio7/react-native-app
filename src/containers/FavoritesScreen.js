import { connect } from 'react-redux';

import { fetchNamesSuccess } from '../redux/namesReducer/actions';
import FavoritesScreen from '../screens/FavoritesScreen';

const mapStateToProps = state => ({
  names: state.names
});

export default connect(
  mapStateToProps,
  {
    fetchNamesSuccess
  }
)(FavoritesScreen);
