import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import theme from '../global/styles/theme';

export default ({ initial = 0, step = 1 }) => {
  const [number, setNumber] = useState(initial);

  return (
    <View style={style.content}>
      <Button onPress={() => setNumber(number - step)} title=" - " />
      <Text style={style.counter}>{number}</Text>
      <Button onPress={() => setNumber(number + step)} title=" + " />
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
    alignItems: 'center',
  },
  counter: {
    fontSize: theme.fonts.title500,
  },
});
