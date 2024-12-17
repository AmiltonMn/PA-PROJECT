import { Card } from '@/Components/card';
import { MyHeader } from '@/Components/header';
import { StyleSheet, Image, Platform, View, Dimensions, ScrollView } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.tela}>
      <MyHeader text={"Produtos"}></MyHeader>
      <Card title='Martelo' valor={123.88}></Card>
      <Card title='Chave Inglesa' valor={20.81}></Card>
      <Card title='Chave de Fenda' valor={4.95}></Card>
      <Card title='Trena' valor={27.90}></Card>
      <Card title='Parafuso' valor={6.04}></Card>
      <Card title='Prego' valor={16.79}></Card>
      <Card title='Nivel' valor={24.19}></Card>
      <Card title='Chave de Boca' valor={15.90}></Card>
      <Card title='Grifo' valor={35.25}></Card>
      <Card title='Macaco' valor={178.18}></Card>
      <Card title='Braçadeira' valor={37.17}></Card>
      <Card title='Parafusadeira' valor={309.00}></Card>
      <Card title='Serrote' valor={28.90}></Card>
      <Card title='Serra Circular' valor={444.90}></Card>
      <Card title='Chave Philips' valor={8.87}></Card>
      <Card title='Chave Allen' valor={12.49}></Card>
      <Card title='Torquimetro' valor={129.90}></Card>
    </ScrollView>
  );
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  tela: {
    width: width,
    height: height,
    backgroundColor: '#192870'
  },
});
