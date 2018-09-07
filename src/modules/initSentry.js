import Sentry from 'sentry-expo';

export default (sentryDSN) => {
  Sentry.config(sentryDSN).install();
};
