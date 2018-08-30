import React from 'react';
import { withApollo } from 'react-apollo';

import ListWithTabs from '../components/ListWithTabs';

class FavoritesScreen extends React.Component {
  render() {
    return <ListWithTabs names={this.props.names} page="favorites" />;
  }
}

export default withApollo(FavoritesScreen);
