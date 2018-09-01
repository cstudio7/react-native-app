import { Amplitude } from 'expo';

const initAmplitude = () => {
  if (__DEV__) {
    return;
  }

  Amplitude.initialize(process.env.AMPLITUDE_KEY);
};

export default initAmplitude;
