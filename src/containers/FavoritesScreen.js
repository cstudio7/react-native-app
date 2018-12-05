import { connect } from 'react-redux';
import { favoritesScreenView } from '../actions/actions';
import FavoritesScreen from '../screens/FavoritesScreen';

const mapStateToProps = (state) => ({
  data: state.names
});

export default connect(
  mapStateToProps,
  {
    favoritesScreenView
  }
)(FavoritesScreen);
