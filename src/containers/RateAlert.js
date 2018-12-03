import { connect } from 'react-redux';
import {
  showRateAlert,
  rateApp,
  updateUserVisits,
  resetUserVisits
} from '../actions/actions';
import RateAlert from '../components/RateAlert/RateAlert';

const mapStateToProps = state => ({
  rated: state.rate.rated,
  userVisitsCount: state.rate.visitsCount
});

export default connect(
  mapStateToProps,
  {
    showRateAlert,
    rateApp,
    updateUserVisits,
    resetUserVisits
  }
)(RateAlert);
