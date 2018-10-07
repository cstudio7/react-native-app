import { Sentry } from 'react-native-sentry';
import config from '../../../config';

if (process.env.NODE_ENV === 'production') {
  Sentry.config(config.sentryDSN).install();
}

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
