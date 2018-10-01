import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { listScreenView, loadNames } from '../actions/actions';
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
