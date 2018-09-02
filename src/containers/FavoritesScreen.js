import { connect } from 'react-redux';

import { filterFavorites } from '../redux/namesReducer/selectors';
import FavoritesScreen from '../screens/FavoritesScreen';

const mapStateToProps = state => ({
  favorites: filterFavorites(state.names)
});

export default connect(
  mapStateToProps,
  {}
)(FavoritesScreen);
