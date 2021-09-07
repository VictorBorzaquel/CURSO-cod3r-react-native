import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../global/styles/theme';
import CounterButtons from './CounterButtons';
import CounterDisplay from './CounterDisplay';

export default props => {
  const [num, setNum] = useState(0);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <View>
      <Text style={style.title}>Counter</Text>
      <CounterDisplay num={num} />
      <CounterButtons inc={inc} dec={dec} />
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: theme.fonts.title500,
  },
});
