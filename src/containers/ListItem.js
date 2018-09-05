import { connect } from 'react-redux';
import ListItem from '../components/ListItem/ListItem';
import { favorite } from '../redux/namesReducer/actions';

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {
    onPress: favorite
  }
)(ListItem);
