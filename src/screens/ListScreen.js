import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Amplitude } from 'expo';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import WithTabs from '../components/WithTabs';

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

  componentDidMount() {
    this.getNames('female');
    this.getNames('male');
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
    return (
      <View style={styles.container}>
        <WithTabs screen={this.props.navigation.state.routeName} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 30
  }
});

export default withApollo(ListScreen);
