import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../global/styles/theme';

export default props => {
  return (
    <>
      <Text style={style.title}>{props.a}</Text>
      <Text style={style.subtitle}>{props.b}</Text>
    </>
  );
};

const style = StyleSheet.create({
  content: {
    flexDirection: 'row',
  },
  title: {
    fontSize: theme.fonts.title500,
  },
  subtitle: {
    fontSize: theme.fonts.subtitle500,
  },
});
