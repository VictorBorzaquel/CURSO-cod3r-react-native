import React from 'react';
import { StyleSheet, Text } from 'react-native';
import theme from '../global/styles/theme';

export default ({ min, max }) => {
  const random = Math.round(min + Math.random() * (max - min));

  return (
    <Text style={styles.title}>
      O Valor entre {min} e {max} é: {random}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: theme.fonts.title500,
    textAlign: 'center',
  },
});
