import React from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
const R = require('ramda');

import { getFavoriteNames } from '../modules/asyncStorage';
import ListWithTopBar from '../components/ListWithTopBar';

class ListScreen extends React.Component {
  getNames = async gender => {
    const favoriteNames = await getFavoriteNames(gender);
    const favoriteNamesIds = favoriteNames.map(name => name.id);
    const names = await this.fetchNames(gender);
    const markFavoriteNames = nameObj =>
      R.assoc('isFavorite', favoriteNamesIds.includes(nameObj.id), nameObj);
    this.props.fetchNamesSuccess({
      gender,
      names: names.map(markFavoriteNames)
    });
  };

  fetchNames(gender) {
    const femaleNamesQuery = gql`
      {
        femaleNames {
          id
          name
        }
      }
    `;

    const maleNamesQuery = gql`
      {
        maleNames {
          id
          name
        }
      }
    `;

    return this.props.client
      .query({
        query: gender === 'female' ? femaleNamesQuery : maleNamesQuery
      })
      .then(({ data }) => data.femaleNames || data.maleNames);
  }

  render() {
    return <ListWithTopBar getNames={this.getNames} names={this.props.names} />;
  }
}

export default withApollo(ListScreen);
