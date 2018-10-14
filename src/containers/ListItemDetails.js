import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ListItemDetailsScreen from '../screens/ListItemDetailsScreen';
import { openNameScreen } from '../actions/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      openNameScreen: openNameScreen.bind(null, props.screen)
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListItemDetailsScreen);
