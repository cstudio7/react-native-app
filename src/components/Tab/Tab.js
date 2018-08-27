import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Tab extends React.Component {
  render() {
    const { tab } = this.props;
    return (
      <TouchableOpacity
        onPress={tab.onPress}
        style={[styles.tab, tab.isActive ? styles.tabActive : null]}>
        <Text style={styles.tabText}>{tab.name}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    height: 40,
    alignItems: 'center',
    paddingVertical: 11,
    borderBottomWidth: 2,
    borderBottomColor: '#fff'
  },
  tabActive: {
    borderBottomColor: '#000'
  },
  tabText: {
    fontWeight: '600',
    textAlign: 'center'
  }
});
