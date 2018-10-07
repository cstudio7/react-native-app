import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getNames } from '../reducers/names/selectors';
import { scrollEvent } from '../actions/actions';
import List from '../components/List/List';

const makeMapStateToProps = (state, props) => ({
  data: getNames(state, props)
});


const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      scrollEvent: scrollEvent.bind(null, props.screen)
    },
    dispatch
  );
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(List);
