import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { makeGetSections } from '../redux/namesReducer/selectors';
import { scrollEvent } from '../redux/namesReducer/actions';
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
