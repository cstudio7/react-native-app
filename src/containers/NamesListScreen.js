import { connect } from 'react-redux';

import { fetchNamesSuccess } from '../redux/namesReducer/actions';
import NamesListScreen from '../screens/NamesListScreen';

const mapStateToProps = state => ({
  names: state.names
});

export default connect(
  mapStateToProps,
  {
    fetchNamesSuccess
  }
)(NamesListScreen);
