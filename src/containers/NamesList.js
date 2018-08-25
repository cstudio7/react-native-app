import { connect } from 'react-redux';

import NamesList from '../components/NamesList';

const mapStateToProps = state => ({
  names: state.names
});

export default connect(
  mapStateToProps,
  {}
)(NamesList);
