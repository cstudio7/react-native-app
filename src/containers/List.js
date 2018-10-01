import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeGetSections } from '../reducers/names/selectors';
import { scrollEvent } from '../actions/actions';
import List from '../components/List/List';

const makeMapStateToProps = () => {
  const getSections = makeGetSections();
  const mapStateToProps = (state, props) => ({
    sections: getSections(state, props)
  });
  return mapStateToProps;
};

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
