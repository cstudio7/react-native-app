import { connect } from 'react-redux';
import {
  listScreenView,
  loadNames,
  updateUserVisits
} from '../actions/actions';
import ListScreen from '../screens/ListScreen';

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {
    listScreenView,
    loadNames,
    updateUserVisits
  }
)(ListScreen);
