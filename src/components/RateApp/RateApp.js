import React from 'react';
import { View, Alert } from 'react-native';
import Rate from 'react-native-rate';
import debounce from 'lodash.debounce';

const showRateAppAlert = ({ rateApp, resetUserVisits }) => {
  return Alert.alert(
    'Оцените приложение',
    'Если у вас есть пожелание или жалоба - напишите нам, мы ежедневно работаем над улучшением приложения.',
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

class RateApp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.showRateAppAlert = debounce(showRateAppAlert, 5000);
  }

  render() {
    return (
      <View>
        {!this.props.rated &&
          this.props.userVisitsCount >= 3 &&
          this.showRateAppAlert({
            rateApp: this.props.rateApp,
            resetUserVisits: this.props.resetUserVisits
          })}
      </View>
    );
  }
}

export default RateApp;
