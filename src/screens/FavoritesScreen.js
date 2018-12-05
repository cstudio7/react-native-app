import React from 'react';
import { Keyboard } from 'react-native';
import { Tab, Tabs } from 'native-base';
import { withNavigationFocus } from 'react-navigation';
import { Container } from 'native-base';
import List from '../components/List';
import ListEmptyComponent from '../components/ListEmptyComponent/ListEmptyComponent';

const dismissKeyboard = () => Keyboard.dismiss();

const FavoritesScreen = ({ data, isFocused, favoritesScreenView }) => {
  isFocused && favoritesScreenView();
  return (
    <Container>
      <Tabs onChangeTab={dismissKeyboard}>
        <Tab heading="Девочки">
          <List
            tab="female"
            screen="Favorites"
            data={getFavoriteNames(data, 'female')}
            renderListEmptyComponent={renderListEmptyComponent}
          />
        </Tab>
        <Tab heading="Мальчики">
          <List
            tab="male"
            screen="Favorites"
            data={getFavoriteNames(data, 'male')}
            renderListEmptyComponent={renderListEmptyComponent}
          />
        </Tab>
      </Tabs>
    </Container>
  );
};

function getFavoriteNames(names, tab) {
  return names[tab].filter(name => name.isFavorite);
}

function renderListEmptyComponent() {
  return (
    <ListEmptyComponent message="Вы пока ничего не добавили в избранное" />
  );
}

export default withNavigationFocus(FavoritesScreen);
