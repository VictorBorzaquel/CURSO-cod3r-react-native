import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import theme from '../global/styles/theme';

export default () => {
  const run = () => console.warn('Executar #1');

  return (
    <View style={styles.content}>
      <Button title="Executar #1" onPress={run} />
      <Button title="Executar #2" onPress={() => console.warn('Executar #2')} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    height: '30%',
    justifyContent: 'space-evenly',
  },
});
