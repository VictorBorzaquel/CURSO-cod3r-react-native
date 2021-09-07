import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Mega from './components/mega/Mega';
/*
import Cube from './components/layout/Cube';
import FlexBoxV1 from './components/layout/FlexBoxV1';
import FlexBoxV2 from './components/layout/FlexBoxV2';
import FlexBoxV3 from './components/layout/FlexBoxV3';
import ListProduct from './components/product/ListProduct';
import ListProductV2 from './components/product/ListProductV2';
import Family from './components/Relation/Family';
import Member from './components/Relation/Member';
import TypeYourName from './components/TypeYourName';
import CounterV2 from './components/counter/CounterV2';
import Diff from './components/Diff';
import Parent from './components/direct/Parent';
import InParent from './components/indirect/InParent';
import Temp from './components/Temp';
import Count from './components/Count';
import MyButton from './components/MyButton';
import MinMax from './components/MinMax';
import Comp, { Comp1, Comp2 } from './components/Multi';
import Primeiro from './components/Primeiro';
import Random from './components/Random';
import Title from './components/Title';
*/

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <Mega numbers={7} />
      {/*
      <FlexBoxV3 />
      <FlexBoxV2 />
      <FlexBoxV1 />
      <TypeYourName />
      <ListProductV2 />
      <ListProduct />
      <Family name="Borzaquel">
        <Member firstName="Victor" lastName="Borzaquel" />
        <Member firstName="Karen" lastName="Uchoa" />
      </Family>
      <Family name="Silva">
        <Member firstName="Silva" lastName="Borzaquel" />
        <Member firstName="Alim" lastName="Uchoa" />
      </Family>
      <Diff />
      <CounterV2 />
      <InParent />
      <Parent />
      <Temp />
      <Count initial={2} step={3} />
      <MyButton />
      <Title title="Victor" subtitle="Hugo" />
      <Random min={5} max={50} />
      <MinMax min={3} max={30} />
      <Comp />
      <Comp1 />
      <Comp2 />
      <Primeiro />
      */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
