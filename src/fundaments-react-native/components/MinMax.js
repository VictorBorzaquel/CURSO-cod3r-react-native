import React from 'react';
import { StyleSheet, Text } from 'react-native';
import theme from '../global/styles/theme';

export default ({ min, max }) => (
  <Text style={styles.title}>
    O Valor {max} é maior que o valor {min}
  </Text>
);

const styles = StyleSheet.create({
  title: {
    fontSize: theme.fonts.title500,
    textAlign: 'center',
  },
});
