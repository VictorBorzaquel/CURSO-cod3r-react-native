import React from 'react';
import { View } from 'react-native';

export default ({ color = '#000', size = 50 }) => (
  <View style={{ height: size, width: size, backgroundColor: color }} />
);
