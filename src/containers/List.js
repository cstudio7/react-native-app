import { bindActionCreators } from 'redux';
import throttle from 'lodash.throttle';
import { connect } from 'react-redux';
import { makeGetSections } from '../redux/namesReducer/selectors';
import {
  favoritesScreenScroll,
  listScreenScroll
} from '../redux/namesReducer/actions';
import List from '../components/List/List';

const makeMapStateToProps = () => {
  const getSections = makeGetSections();
  const mapStateToProps = (state, props) => ({
    sections: getSections(state, props)
  });
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch, props) => {
  const scrollEvent =
    props.screen === 'Favorites' ? favoritesScreenScroll : listScreenScroll;
  const scrollEventThrottle = throttle(scrollEvent, 3000);

  return bindActionCreators(
    {
      scrollEvent
    },
    dispatch
  );
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(List);
