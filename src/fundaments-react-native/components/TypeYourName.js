import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import theme from '../global/styles/theme';

export default props => {
  const [name, setName] = useState('');
  return (
    <View style={styles.content}>
      <Text>Seu nome é: {name}</Text>

      <TextInput
        placeholder="Digite seu nome!"
        value={name}
        onChangeText={setName}
      />

      {/* Uncontrolled Input */}
      <TextInput placeholder="Digite seu nome!" />
      <TextInput placeholder="Digite seu nome!" value={null} />
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
