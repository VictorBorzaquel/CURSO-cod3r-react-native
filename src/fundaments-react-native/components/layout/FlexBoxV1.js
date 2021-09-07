import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cube from './Cube';

export default props => {
  return (
    <View style={styles.content}>
      <Cube color={'#ff801a'} />
      <Cube color={'#50d1f6'} />
      <Cube color={'#dd22c1'} />
      <Cube color={'#8312ed'} />
      <Cube color={'#36c9a7'} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
  },
});
