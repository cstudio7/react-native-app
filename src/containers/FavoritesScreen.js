import { connect } from 'react-redux';
import { favoritesScreenView } from '../redux/namesReducer/actions';
import FavoritesScreen from '../screens/FavoritesScreen';

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {
    favoritesScreenView
  }
)(FavoritesScreen);
