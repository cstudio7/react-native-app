import RNAmplitude from 'react-native-amplitude-analytics';
import config from '../../../config';

const amplitude = new RNAmplitude(config.amplitudeApiKey);

export default _ => next => action => {
  const { type } = action;
  amplitude.logEvent(type);
  return next(action);
};