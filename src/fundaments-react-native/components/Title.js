import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import theme from '../global/styles/theme';

export default ({ title, subtitle }) => {
  return (
    <React.Fragment key={1}>
      {/* equals = <> </> */}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: theme.fonts.title500,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: theme.fonts.subtitle500,
    textAlign: 'center',
  },
});
