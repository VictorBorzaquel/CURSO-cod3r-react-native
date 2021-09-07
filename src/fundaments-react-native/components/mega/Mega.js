/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import theme from '../../global/styles/theme';
import NumberMega from './NumberMega';

export default class Mega extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     numbers: props.numbers,
  //   };

  //   this.setNumbers = this.setNumbers.bind(this);
  // }
  state = {
    amountNumbers: this.props.numbers,
    numbers: [],
  };

  setAmountNumbers = amountNumbers => this.setState({ amountNumbers: +amountNumbers });

  randomNewNumber = numbers => {
    const number = Math.floor(Math.random() * 60) + 1;
    const newNumber = numbers.includes(number)
      ? this.randomNewNumber(numbers)
      : number;
    return newNumber;
  };

  randomNumberMega = () => {
    const numbers = Array(this.state.amountNumbers)
      .fill()
      .reduce(acc => [ ...acc, this.randomNewNumber(acc)], [])
      .sort((a, b) => a - b);
    this.setState({ numbers });
  };

  displayNumbers = () => {
    const numbers = this.state.numbers;
    return numbers.map(number => <NumberMega key={number} number={number} />);
  }

  render() {
    return (
      <>
        <Text style={styles.title}>
          Gerador de Mega-Sena
          {this.state.amountNumbers}
        </Text>

        <TextInput
          keyboardType={'numeric'}
          style={styles.input}
          placeholder="Quantidade de numeros"
          value={`${this.state.amountNumbers}`}
          onChangeText={this.setAmountNumbers}
        />

        <Button onPress={this.randomNumberMega} title="Gerar Numeros" />

        {/* <Text>{this.state.numbers.join(',')}</Text> */}

        <View style={styles.container}>{this.displayNumbers()}</View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: '#ddd',
  },
  title: {
    fontSize: theme.fonts.title500,
  },
  input: {
    borderBottomWidth: 1,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50,
    justifyContent: 'center',
  },
});
