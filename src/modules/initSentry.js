import { Sentry } from 'react-native-sentry';

export default sentryDSN => {
  Sentry.config(sentryDSN).install();
};
