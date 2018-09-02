import { Amplitude } from 'expo';
import initAmplitude from './initAmplitude';

it('calls Amplitude.initialize with the API key', () => {
  process.env.AMPLITUDE_KEY = "123abc";
  const spy = jest.spyOn(Amplitude, 'initialize');
  initAmplitude();
  expect(spy).toHaveBeenCalledWith("123abc");
});

