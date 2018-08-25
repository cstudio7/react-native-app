import { connect } from 'react-redux';

import saveNames from '../actions/saveNames';
import NamesListScreen from '../screens/NamesListScreen';

const mapStateToProps = (state) => ({
  names: state.names
});

export default connect(
  mapStateToProps,
  {
    saveNames
  }
)(NamesListScreen);
