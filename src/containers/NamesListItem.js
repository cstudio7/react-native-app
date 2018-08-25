import { connect } from 'react-redux';

import favoriteName from '../actions/favoriteName';
import unfavoriteName from '../actions/unfavoriteName';
import NamesListItem from '../components/NamesListItem';

const mapStateToProps = () => ({
});

export default connect(
  mapStateToProps,
  {
    favoriteName,
    unfavoriteName
  }
)(NamesListItem);
