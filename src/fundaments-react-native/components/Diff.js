import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import theme from '../global/styles/theme';

export default props => {
  const isAndroid = Platform.OS === 'android';
  return (
    <View style={styles.content}>
      <Text style={styles.title}>{isAndroid ? 'Android' : 'iOS'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: theme.fonts.title500,
  },
});
