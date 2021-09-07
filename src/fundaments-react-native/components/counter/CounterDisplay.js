import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../global/styles/theme';

export default props => {
  return (
    <View style={style.content}>
      <Text style={style.title}>{props.num}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  content: {
    backgroundColor: 'black',
  },
  title: {
    fontSize: theme.fonts.title500,
    color: 'white',
    textAlign: 'center',
  },
});
