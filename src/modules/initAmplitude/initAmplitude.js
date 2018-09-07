import { Amplitude } from 'expo';

export default (amplitudeApiKey) => {
  Amplitude.initialize(amplitudeApiKey);
};
