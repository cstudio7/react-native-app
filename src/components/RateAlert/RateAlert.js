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

class RateAlert extends React.PureComponent {
  render() {
    return (
      <View>
        {!this.props.rated &&
          this.props.userVisitsCount >= 3 &&
          showRateAlertDebounced({
            rateApp: this.props.rateApp,
            resetUserVisits: this.props.resetUserVisits,
            showRateAppAlertAction: this.props.showRateAppAlert
          })}
      </View>
    );
  }
}

export default RateAlert;
