import React from 'react';
import { Amplitude } from 'expo';

import ListWithTabs from '../components/ListWithTabs';

class FavoritesScreen extends React.PureComponent {
  componentWillMount() {
    Amplitude.logEvent('FAVSCREEN_VIEW');
  }

  render() {
    return <ListWithTabs names={this.props.favorites} page="favorites" />;
  }
}

export default FavoritesScreen;
