import React from 'react';
import Children from './Children';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../global/styles/theme';

export default props => {
  return (
    <>
      <Children a="Victor" b="Hugo" />
      <Children a="Mattos" b="Borzaquel" />
    </>
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
