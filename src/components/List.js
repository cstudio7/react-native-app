import React from 'react';
import { Text, SectionList, StyleSheet } from 'react-native';
import createSection from '../modules/createSection/createSection';
import ListItem from '../containers/ListItem';
import Spacing from '../constants/Spacing';
import ListSectionHeader from './ListSectionHeader'

class List extends React.Component {
  renderSectionHeader = ({ section: { title } }) => <ListSectionHeader title={title} />;

  renderItem = ({ item }) => (
    <ListItem name={item} gender={this.props.gender} page={this.props.page} />
  );

  render() {
    const { names } = this.props;
    let sections = [];
    if (this.props.page === 'favorites') {
      sections = createSection(
        names.filter(nameObject => nameObject.isFavorite)
      );
    } else {
      sections = createSection(names);
    }

    return (
      <SectionList
        style={styles.list}
        renderSectionHeader={this.renderSectionHeader}
        renderItem={this.renderItem}
        sections={sections}
        stickySectionHeadersEnabled={true}
        keyExtractor={item => item.id}
      />
    );
  }
}

const styles = StyleSheet.create({
  list: {
    paddingLeft: Spacing.padding2,
    paddingRight: Spacing.padding2
  }
});

export default List;
