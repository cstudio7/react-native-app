import React from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
const R = require('ramda');

import ListWithTabs from '../components/ListWithTabs';

class ListScreen extends React.Component {
  getNames = async gender => {
    const names = await this.fetchNames(gender);
    this.props.fetchNamesSuccess({ gender, names });
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
    return <ListWithTabs getNames={this.getNames} names={this.props.names} />;
  }
}

export default withApollo(ListScreen);