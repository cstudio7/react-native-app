import { Amplitude } from 'expo';
import initAmplitude from './initAmplitude';

it('calls Amplitude.initialize with the API key', () => {
  const amplitudeApiKey = "123abc";
  const spy = jest.spyOn(Amplitude, 'initialize');
  initAmplitude(amplitudeApiKey);
  expect(spy).toHaveBeenCalledWith(amplitudeApiKey);
});

