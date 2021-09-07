import React from 'react';
import { StyleSheet, View } from 'react-native';

export default props => {
  return (
    <View style={styles.content}>
      <View style={[{ backgroundColor: '#ff801a' }, styles.v1]} />
      <View style={[{ backgroundColor: '#50d1f6' }, styles.v2]} />
      <View style={[{ backgroundColor: '#dd22c1' }, styles.v3]} />
      <View style={[{ backgroundColor: '#36c9a7' }, styles.v4]} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#ddd',
  },
  v1: {
    flex: 1,
  },
  v2: {
    flex: 2,
  },
  v3: {
    flexBasis: 300,
  },
});
