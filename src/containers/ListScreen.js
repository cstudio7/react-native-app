import { connect } from 'react-redux';
import { fetchNamesSuccess } from '../redux/namesReducer/actions';
import ListScreen from '../screens/ListScreen';

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {
    fetchNamesSuccess
  }
)(ListScreen);
