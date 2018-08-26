import { connect } from 'react-redux';

import { favoriteName, unfavoriteName } from '../redux/namesReducer/actions';
import NamesListItem from '../components/NamesListItem';

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {
    favoriteName,
    unfavoriteName
  }
)(NamesListItem);
