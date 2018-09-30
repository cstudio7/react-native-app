import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { listScreenView, loadNames } from '../redux/namesReducer/actions';
import ListScreen from '../screens/ListScreen';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      listScreenView,
      loadNames
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListScreen);
