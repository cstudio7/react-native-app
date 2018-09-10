import React from 'react';
import { Text } from 'react-native';
import Loadable from 'react-loadable';
import WithTabs from './WithTabs';

const List = Loadable({
  loader: () => import('../components/List/List'),
  loading: () => <Text>Loading...</Text>
});

class ListWithTabs extends React.PureComponent {
  state = {
    isMaleNamesFetched: false
  };

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
