import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import theme from '../../global/styles/theme';
import Products from './Products';

export default props => {
  const productView = ({ item: product }) => (
    <Text key={product.id}>
      Produto: {product.name} - Valor: {product.value}
    </Text>
  );

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Products V2:</Text>

      <FlatList
        data={Products}
        keyExtractor={product => product.id}
        renderItem={productView}
      />
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
