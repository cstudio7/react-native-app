import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

export default class TopTab extends React.Component {
  render() {
    const { tabs } = this.props;
    return (
      <View style={styles.tabsContainer}>
        {tabs.map((tab,index) => {
          return (
            <TouchableOpacity
            key={tab.name + index}
              onPress={tab.onPress}
              style={[styles.tab, tab.isActive ? styles.tabActive : null]}>
              <Text style={styles.tabText}>{tab.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    marginBottom: 15
  },
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
