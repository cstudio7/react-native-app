import RNAmplitude from 'react-native-amplitude-analytics';
import config from '../../../config';

let amplitude;
if (process.env.NODE_ENV === 'production') {
  amplitude = new RNAmplitude(config.amplitudeApiKey);
}

export default _ => next => action => {
  const { type } = action;
  amplitude.logEvent(type);
  return next(action);
};
