import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import { Container } from 'native-base';
import WithTabs from '../components/WithTabs';

class FavoritesScreen extends React.PureComponent {
  render() {
    if (this.props.isFocused) {
      this.props.favoritesScreenView();
    }

    return (
      <Container>
        <WithTabs screen="Favorites" />
      </Container>
    );
  }
}

export default withNavigationFocus(FavoritesScreen);
