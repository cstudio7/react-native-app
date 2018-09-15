import React from 'react';
import { SectionList, StyleSheet } from 'react-native';
import ListSectionHeader from '../ListSectionHeader/ListSectionHeader';
import { Spacing } from '../../constants';
import ListItem from '../../containers/ListItem';
import ListEmptyComponent from '../ListEmptyComponent/ListEmptyComponent';

class List extends React.PureComponent {
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

  renderListEmptyComponent = () => <ListEmptyComponent />;

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
