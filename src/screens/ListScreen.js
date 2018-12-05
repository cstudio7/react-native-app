import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import { Keyboard } from 'react-native';
import { Container, Tab, Tabs } from 'native-base';
import ListWithSearchForm from '../containers/ListWithSearchForm';
import RateAlert from '../containers/RateAlert';

const dismissKeyboard = () => Keyboard.dismiss();

class ListScreen extends React.PureComponent {
  componentDidMount() {
    this.props.loadNames();
    this.props.updateUserVisits();
  }

  render() {
    if (this.props.isFocused) {
      this.props.listScreenView();
    }

    return (
      <Container>
        <RateAlert />
        <Tabs onChangeTab={dismissKeyboard}>
          <Tab heading="Девочки">
            <ListWithSearchForm tab="female" screen="List" />
          </Tab>
          <Tab heading="Мальчики">
            <ListWithSearchForm tab="male" screen="List" />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default withNavigationFocus(ListScreen);
