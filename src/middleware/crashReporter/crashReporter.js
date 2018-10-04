import { Sentry } from 'react-native-sentry';

export default store => next => action => {
  try {
    return next(action);
  } catch (err) {
    Sentry.captureException(err, {
      extra: {
        action,
        state: store.getState()
      }
    });
    throw err;
  }
};
