import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getNames } from '../reducers/names/selectors';
import { scrollEvent } from '../actions/actions';
import ListWithSearchForm from '../components/ListWithSearchForm/ListWithSearchForm';

const makeMapStateToProps = (state, props) => ({
  data: getNames(state, props)
});

const mapDispatchToProps = (dispatch, props) => {
  return bindActionCreators(
    {
      scrollEvent: scrollEvent.bind(null, props)
    },
    dispatch
  );
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(ListWithSearchForm);
