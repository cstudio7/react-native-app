import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { changeActiveTab } from '../actions/actions';
import WithTabs from '../components/WithTabs';

const makeMapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      changeActiveTab: changeActiveTab.bind(null, props.screen)
    },
    dispatch
  );
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(WithTabs);
