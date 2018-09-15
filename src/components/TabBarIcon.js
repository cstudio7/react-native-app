import React from 'react';
import { Icon } from 'expo';
import { Colors } from '../constants';

const TabBarIcon = ({ name, focused }) => (
  <Icon.Ionicons
    name={name}
    size={26}
    style={{ marginBottom: -3 }}
    color={focused ? Colors.primary : Colors.gray}
  />
);

export default TabBarIcon;
