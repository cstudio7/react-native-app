import React from 'react';
import { Text } from 'react-native';
import { withApollo } from 'react-apollo';
import Loadable from 'react-loadable';
const R = require('ramda');

import WithTopBar from '../components/WithTopBar';
import { getFavoriteNames } from '../helpers/asyncStorage';
import { femaleNamesQuery, maleNamesQuery } from '../graphql/names';

const FemaleNamesList = Loadable({
  loader: () => import('../containers/NamesList'),
  loading: () => <Text>Loading...</Text>
});

const MaleNamesList = Loadable({
  loader: () => import('../containers/NamesList'),
  loading: () => <Text>Loading...</Text>
});

class NamesListScreen extends React.Component {
  componentDidMount() {
    this.getNames('female');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isFemaleTabActive !== nextProps.isFemaleTabActive) {
      if (!nextProps.names.male.length && !nextProps.isFemaleTabActive) {
        this.getNames('male');
      }
    }
  }

  getNames = async gender => {
    const favoriteNames = await getFavoriteNames(gender);
    const favoriteNamesIds = favoriteNames.map(name => name.id);
    const names = await this.fetchNames(gender);
    const isFavorite = nameObj =>
      R.assoc('isFavorite', favoriteNamesIds.includes(nameObj.id), nameObj);
    const result = names.map(isFavorite);
    this.props.saveNames(gender, result);
  };

  fetchNames(gender) {
    return this.props.client
      .query({
        query: gender === 'female' ? femaleNamesQuery : maleNamesQuery
      })
      .then(({ data }) => data.femaleNames || data.maleNames);
  }

  render() {
    const { isFemaleTabActive } = this.props;

    return isFemaleTabActive ? (
      <FemaleNamesList gender="female" />
    ) : (
      <MaleNamesList gender="male" />
    );
  }
}

export default withApollo(WithTopBar(NamesListScreen));
