import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../global/styles/theme';

export default ({ number }) => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{number}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
    margin: 5,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: theme.fonts.title500,
    color: 'white',
  },
});
