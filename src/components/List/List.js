import React from 'react';
import { SectionList, StyleSheet } from 'react-native';
import ListSectionHeader from '../ListSectionHeader/ListSectionHeader';
import createSection from '../../modules/createSection/createSection';
import Spacing from '../../constants/Spacing';
import ListItem from '../../containers/ListItem';

class List extends React.Component {
  renderSectionHeader = ({ section: { title } }) => (
    <ListSectionHeader title={title} />
  );

  renderItem = ({ item }) => (
    <ListItem name={item} gender={this.props.gender} screen={this.props.screen} />
  );

  render() {
    const { names } = this.props;
    const sections = createSection(names);

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
