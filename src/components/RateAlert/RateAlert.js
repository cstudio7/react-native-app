import React from 'react';
import { View, Alert } from 'react-native';
import Rate from 'react-native-rate';
import debounce from 'lodash.debounce';

const showRateAlert = ({ rateApp, resetUserVisits, showRateAlertAction }) => {
  showRateAlertAction();

  return Alert.alert(
    'Оцените приложение',
    'Ваше мнение — лучшая благодарность для нас.',
    [
      {
        text: 'Не сейчас',
        onPress: () => resetUserVisits()
      },
      {
        text: 'Да, без проблем',
        onPress: () => {
          const options = {
            GooglePackageName: 'dev.baarsjes.babynamespro',
            preferInApp: false
          };
          Rate.rate(options, success => {
            if (success) {
              rateApp();
            }
          });
        }
      }
    ],
    { cancelable: false }
  );
};

const showRateAlertDebounced = debounce(showRateAlert, 5000);

const RateAlert = ({
  rated,
  userVisitsCount,
  rateApp,
  resetUserVisits,
  showRateAppAlert
}) => (
  <View>
    {!rated &&
      userVisitsCount >= 3 &&
      showRateAlertDebounced({
        rateApp: rateApp,
        resetUserVisits: resetUserVisits,
        showRateAppAlertAction: showRateAppAlert
      })}
  </View>
);

export default RateAlert;
