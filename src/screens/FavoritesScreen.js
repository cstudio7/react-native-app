import React from 'react';
import { Amplitude } from 'expo';

import ListWithTabs from '../components/ListWithTabs';

class FavoritesScreen extends React.Component {
  componentWillMount() {
    Amplitude.logEvent('FAVSCREEN_VIEW');
  }

  render() {
    return (
      <ListWithTabs
        names={this.props.favorites}
        screen={this.props.navigation.state.routeName}
      />
    );
  }
}

export default FavoritesScreen;
