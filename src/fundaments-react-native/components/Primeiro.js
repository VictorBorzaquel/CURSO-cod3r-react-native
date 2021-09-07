import React from 'react';
import { StyleSheet, Text } from 'react-native';
import theme from '../global/styles/theme';

export default () => {
  // const consoleLog = 'Mostrar Variavel';

  // console.warn(consoleLog);

  return <Text style={styles.container}>Ola</Text>;
};

const styles = StyleSheet.create({
  container: {
    fontSize: theme.fonts.title500,
  },
});
