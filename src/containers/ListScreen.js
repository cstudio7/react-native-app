import React from 'react';
import { Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import { Container, Tab, Tabs } from 'native-base';
import {
  listScreenView,
  loadNames,
  updateUserVisits
} from '../actions/actions';
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

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  {
    listScreenView,
    loadNames,
    updateUserVisits
  }
)(withNavigationFocus(ListScreen));
