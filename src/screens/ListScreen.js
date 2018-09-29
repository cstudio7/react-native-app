import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import Loadable from 'react-loadable';

const WithTabs = Loadable({
  loader: () => import('../containers/WithTabs'),
  loading: () => <Text>Loading...</Text>
});

const femaleNamesQuery = gql`
  {
    femaleNames {
      id
      name
      meaning
    }
  }
`;

const maleNamesQuery = gql`
  {
    maleNames {
      id
      name
      meaning
    }
  }
`;

class ListScreen extends React.PureComponent {
  componentDidMount() {
    this.props.listScreenView();

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
      .then(({ data }) => data.femaleNames || data.maleNames)
      .catch(error => console.error(error));
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
