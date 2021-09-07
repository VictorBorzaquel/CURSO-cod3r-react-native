import React, { useState } from 'react';
import { Text } from 'react-native';
import theme from '../../global/styles/theme';
import Children from './InChildren';

export default props => {
  const [num, setNum] = useState(0);

  const viewValue = number => setNum(number);

  return (
    <>
      <Text style={{ fontSize: theme.fonts.title500 }}>{num}</Text>
      <Children min={1} max={100} f={viewValue} />
    </>
  );
};
