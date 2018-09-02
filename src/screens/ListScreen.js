import React from 'react';
import { Amplitude } from 'expo';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import ListWithTabs from '../components/ListWithTabs';

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

class ListScreen extends React.PureComponent {
  componentWillMount() {
    Amplitude.logEvent('LISTSCREEN_VIEW');
  }

  getNames = async gender => {
    const names = await this.fetchNames(gender);
    this.props.fetchNamesSuccess({ gender, names });
  };

  fetchNames(gender) {
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
