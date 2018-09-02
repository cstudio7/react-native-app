import { Amplitude } from 'expo';

export default () => {
  Amplitude.initialize(process.env.AMPLITUDE_KEY);
};
