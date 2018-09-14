import { connect } from 'react-redux';
import {
  fetchNamesSuccess,
  listScreenView
} from '../redux/namesReducer/actions';
import ListScreen from '../screens/ListScreen';

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {
    fetchNamesSuccess,
    listScreenView
  }
)(ListScreen);
