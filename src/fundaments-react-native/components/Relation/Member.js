import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../../global/styles/theme';

export default props => {
  return (
    <Text style={styles.title}>
      {props.firstName} {props.lastName}
    </Text>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: theme.fonts.title500,
  },
});
