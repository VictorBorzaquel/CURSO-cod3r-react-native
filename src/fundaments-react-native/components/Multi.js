import React from 'react';
import { StyleSheet, Text } from 'react-native';
import theme from '../global/styles/theme';

export default function Comp() {
  return <Text style={styles.title}>Comp Oficial</Text>;
}

export const Comp1 = () => {
  return <Text style={styles.title}>Comp #01</Text>;
};

export const Comp2 = () => {
  return <Text style={styles.title}>Comp #02</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: theme.fonts.title500,
  },
});
