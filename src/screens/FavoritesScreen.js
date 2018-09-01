import React from 'react';
import { withApollo } from 'react-apollo';
import { Amplitude } from 'expo';

import ListWithTabs from '../components/ListWithTabs';

class FavoritesScreen extends React.Component {
  componentWillMount() {
    Amplitude.logEvent('FAVSCREEN_VIEW');
  }

  render() {
    return <ListWithTabs names={this.props.names} page="favorites" />;
  }
}

export default withApollo(FavoritesScreen)
