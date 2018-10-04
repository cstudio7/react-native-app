import React from 'react';
import { Colors } from '../constants';
import Icon from 'react-native-vector-icons/Ionicons';

const TabBarIcon = ({ name, focused }) => (
  <Icon
    name={name}
    size={26}
    style={{ marginBottom: -5 }}
    color={focused ? Colors.primary : Colors.gray}
  />
);

export default TabBarIcon;
