import { Amplitude } from 'expo';

export default _ => next => action => {
  const { type } = action;
  Amplitude.logEvent(type);
  return next(action);
};
