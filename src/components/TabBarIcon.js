import React from 'react';
import { Icon } from 'native-base';
import { Colors } from '../constants';

const TabBarIcon = ({ name, focused }) => (
  <Icon
    name={name}
    style={{
      marginBottom: -5,
      color: focused ? Colors.primary : Colors.gray
    }}
  />
);

export default TabBarIcon;
