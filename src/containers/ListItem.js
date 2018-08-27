import { connect } from 'react-redux';

import { favoriteName, unfavoriteName } from '../redux/namesReducer/actions';
import ListItem from '../components/ListItem';

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {
    favoriteName,
    unfavoriteName
  }
)(ListItem);
