import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import { Container } from 'native-base';
import WithTabs from '../components/WithTabs';
import RateApp from '../containers/RateApp';

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
        <RateApp />
        <WithTabs screen="List" navigation={this.props.navigation} />
      </Container>
    );
  }
}

export default withNavigationFocus(ListScreen);
