import React from 'react';
import { SectionList, StyleSheet } from 'react-native';
import throttle from 'lodash.throttle';
import ListSectionHeader from '../ListSectionHeader/ListSectionHeader';
import ListItem from '../../containers/ListItem';
import ListEmptyComponent from '../ListEmptyComponent/ListEmptyComponent';
import { Spacing } from '../../constants';

class List extends React.PureComponent {
  constructor(props) {
    super(props);
    this.scrollEventThrottle = throttle(props.scrollEvent, 3000);
  }
  renderSectionHeader = ({ section: { title } }) => (
    <ListSectionHeader title={title} />
  );

  renderItem = ({ item }) => (
    <ListItem
      name={item}
      gender={this.props.route.key}
      screen={this.props.screen}
    />
  );

  renderListEmptyComponent = () => (
    <ListEmptyComponent screen={this.props.screen} />
  );

  render() {
    const { sections } = this.props;

    return (
      <SectionList
        style={styles.list}
        renderSectionHeader={this.renderSectionHeader}
        renderItem={this.renderItem}
        sections={sections}
        stickySectionHeadersEnabled={true}
        keyExtractor={item => item.id}
        ListEmptyComponent={this.renderListEmptyComponent}
        onScrollBeginDrag={this.scrollEventThrottle}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    backgroundColor: '#fff',
    paddingLeft: Spacing.padding2,
    paddingRight: Spacing.padding2
  }
});

export default List;
