import React from 'react';
import { Text } from 'react-native';
import Loadable from 'react-loadable';
const R = require('ramda');

import WithTabs from './WithTabs';

const List = Loadable({
  loader: () => import('../components/List/List'),
  loading: () => <Text>Loading...</Text>
});

class ListWithTabs extends React.Component {
  state = {
    isMaleNamesFetched: false
  };

  componentDidMount() {
    if (this.props.getNames) {
      this.props.getNames('female');
    }
  }

  shouldComponentUpdate(nextProps) {
    if (!R.equals(this.props.names, nextProps.names)) {
      return true;
    }

    if (this.props.isFemaleTabActive !== nextProps.isFemaleTabActive) {
      if (
        !nextProps.isFemaleTabActive &&
        !nextProps.names.male.length &&
        this.props.getNames
      ) {
        this.props.getNames('male');
      }
      return true;
    }

    return false;
  }

  render() {
    const { isFemaleTabActive, names } = this.props;
    const gender = isFemaleTabActive ? 'female' : 'male';
    return (
      <List
        key={gender + this.props.screen}
        names={names[gender]}
        gender={gender}
        page={this.props.screen}
      />
    );
  }
}

export default WithTabs(ListWithTabs);
