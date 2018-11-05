import { connect } from 'react-redux';
import { rateApp, updateUserVisits, resetUserVisits } from '../actions/actions';
import RateApp from '../components/RateApp/RateApp';

const mapStateToProps = (state) => ({
  rated: state.rate.rated,
  userVisitsCount: state.rate.visitsCount
});

export default connect(
  mapStateToProps,
  {
    rateApp,
    updateUserVisits,
    resetUserVisits
  }
)(RateApp);
