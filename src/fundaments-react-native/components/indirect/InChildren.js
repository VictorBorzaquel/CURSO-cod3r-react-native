import React from 'react';
import { Button } from 'react-native';

export default props => {
  const generateNumber = (min, max) => {
    const factory = max - min + 1;

    return Math.round(Math.random() * factory) + min;
  };
  return (
    <Button
      title="Executar"
      onPress={() => {
        const n = generateNumber(props.min, props.max);
        props.f(n);
      }}
    />
  );
};
