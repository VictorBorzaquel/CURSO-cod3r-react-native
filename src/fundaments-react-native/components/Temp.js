import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../global/styles/theme';

export default () => {
  return (
    <View style={style.content}>
      <Text style={style.title}>Hello</Text>
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: theme.fonts.title500,
  },
});
