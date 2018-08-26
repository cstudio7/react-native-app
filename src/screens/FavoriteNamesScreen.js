import React from 'react';
import { Text } from 'react-native';
import { withApollo } from 'react-apollo';
import Loadable from 'react-loadable';

import WithTopBar from '../components/WithTopBar';
import { getFavoriteNames } from '../modules/asyncStorage';

const FemaleNamesList = Loadable({
  loader: () => import('../containers/NamesList'),
  loading: () => <Text>Loading...</Text>
});

const MaleNamesList = Loadable({
  loader: () => import('../containers/NamesList'),
  loading: () => <Text>Loading...</Text>
});

class FavoriteNamesScreen extends React.Component {
  componentDidMount() {
    this.getNames('female');
  }

  getNames = async gender => {
    const names = await getFavoriteNames(gender);
    this.props.fetchNamesSuccess({ gender, names });
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.isFemaleTabActive !== nextProps.isFemaleTabActive) {
      if (!nextProps.names.male.length && !nextProps.isFemaleTabActive) {
        this.getNames('male');
      }
    }
  }

  render() {
    const { isFemaleTabActive } = this.props;

    return isFemaleTabActive ? (
      <FemaleNamesList gender="female" page="favorites" />
    ) : (
      <MaleNamesList gender="male" page="favorites" />
    );
  }
}

export default withApollo(WithTopBar(FavoriteNamesScreen));
