import React from 'react';
import { Text, SectionList } from 'react-native';

import createSection from '../modules/createSection/createSection';
import NamesListItem from '../containers/NamesListItem';

class NamesList extends React.Component {
  renderSectionHeader = ({ section: { title } }) => <Text>{title}</Text>;

  renderItem = ({ item }) => (
    <NamesListItem name={item} gender={this.props.gender} />
  );

  render() {
    const { names, gender } = this.props;
    let sections = [];
    if (this.props.page === 'favorites') {
      sections = createSection(
        names[gender].filter(nameObject => nameObject.isFavorite)
      );
    } else {
      sections = createSection(names[gender]);
    }

    return (
      <SectionList
        renderSectionHeader={this.renderSectionHeader}
        renderItem={this.renderItem}
        sections={sections}
        stickySectionHeadersEnabled={true}
        keyExtractor={item => item.id}
      />
    );
  }
}

export default NamesList;
