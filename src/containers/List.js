import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import List from '../components/List/List';
import { scrollEvent } from '../actions/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      scrollEvent: scrollEvent.bind(null, props)
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
