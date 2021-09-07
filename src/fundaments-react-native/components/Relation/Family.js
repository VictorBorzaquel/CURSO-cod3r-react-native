import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default props => {
  return (
    <>
      <Text>Membros da família {props.name}</Text>
      {props.children}
    </>
  );
};
