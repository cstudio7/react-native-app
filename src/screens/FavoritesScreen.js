import React from 'react';
import { withNavigationFocus } from 'react-navigation';
import { Container } from 'native-base';
import WithTabs from '../components/WithTabs';

const FavoritesScreen = ({ isFocused, favoritesScreenView }) => {
  isFocused && favoritesScreenView();
  return (
    <Container>
      <WithTabs screen="Favorites" />
    </Container>
  );
};

export default withNavigationFocus(FavoritesScreen);
