import { connect } from 'react-redux';
import List from '../components/List/List';
import { makeGetSections } from '../redux/namesReducer/selectors';

const makeMapStateToProps = () => {
  const getSections = makeGetSections();
  const mapStateToProps = (state, props) => ({
    sections: getSections(state, props)
  });
  return mapStateToProps;
};

export default connect(
  makeMapStateToProps,
  {}
)(List);
