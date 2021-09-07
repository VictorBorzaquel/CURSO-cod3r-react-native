import React from 'react';
import { StyleSheet, View } from 'react-native';
import Cube from './Cube';

export default props => {
  return (
    <View style={styles.content}>
      <Cube color={'#ff801a'} size={20} />
      <Cube color={'#50d1f6'} size={30} />
      <Cube color={'#dd22c1'} size={40} />
      <Cube color={'#8312ed'} size={50} />
      <Cube color={'#36c9a7'} size={60} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    backgroundColor: '#ddd',
  },
});
