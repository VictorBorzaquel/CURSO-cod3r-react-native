import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default props => {
  return (
    <View style={styles.container}>
      <Button title="   +   " onPress={props.inc} />
      <Button title="   -   " onPress={props.dec} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
});
