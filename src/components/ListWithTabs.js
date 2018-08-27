import React from 'react';
import { Text } from 'react-native';
import Loadable from 'react-loadable';

import WithTabs from './WithTabs';

const FemaleNamesList = Loadable({
  loader: () => import('../components/List'),
  loading: () => <Text>Loading...</Text>
});

const MaleNamesList = Loadable({
  loader: () => import('../components/List'),
  loading: () => <Text>Loading...</Text>
});

const List = Loadable({
  loader: () => import('../components/List'),
  loading: () => <Text>Loading...</Text>
});

class ListWithTabs extends React.Component {
  getSelectedGender() {
    const { isFemaleTabActive } = this.props;
    return isFemaleTabActive ? 'female' : 'male';
  }

  componentDidMount() {
    this.props.getNames('female');
  }

  render() {
    const { isFemaleTabActive, getNames, names } = this.props;
    const gender = isFemaleTabActive ? 'female' : 'male';

    if (!isFemaleTabActive && !names.male.length) {
      getNames('male');
    }

    return isFemaleTabActive ? (
      <FemaleNamesList
        names={this.props.names[gender]}
        gender="female"
        page={this.props.page}
      />
    ) : (
      <MaleNamesList
        names={this.props.names[gender]}
        gender="male"
        page={this.props.page}
      />
    );
  }
}

export default WithTabs(ListWithTabs);
