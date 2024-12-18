import { Card } from '@/Components/card';
import { CardWithoutButton } from '@/Components/CardWithoutButton';
import { MyHeader } from '@/Components/header';
import { StyleSheet, Image, Platform, View, Dimensions, TextInput, ScrollView } from 'react-native';

export default function TabTwoScreen() {
  return (
    <ScrollView style={styles.tela}>
      <MyHeader text={"Produtos"}></MyHeader>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <TextInput style={styles.search}
        placeholder='Pesquise uma ferramenta'
        ></TextInput>
      </View>
      <CardWithoutButton image='' title='Martelo' valor={123.88}></CardWithoutButton>
      <CardWithoutButton image='' title='Chave Inglesa' valor={20.81}></CardWithoutButton>
      <CardWithoutButton image='' title='Chave de Fenda' valor={4.95}></CardWithoutButton>
      <CardWithoutButton image='' title='Trena' valor={27.90}></CardWithoutButton>
      <CardWithoutButton image='' title='Parafuso' valor={6.04}></CardWithoutButton>
      <CardWithoutButton image='' title='Prego' valor={16.79}></CardWithoutButton>
      <CardWithoutButton image='' title='Nivel' valor={24.19}></CardWithoutButton>
      <CardWithoutButton image='' title='Chave de Boca' valor={15.90}></CardWithoutButton>
      <CardWithoutButton image='' title='Grifo' valor={35.25}></CardWithoutButton>
      <CardWithoutButton image='' title='Macaco' valor={178.18}></CardWithoutButton>
      <CardWithoutButton image='' title='Braçadeira' valor={37.17}></CardWithoutButton>
      <CardWithoutButton image='' title='Parafusadeira' valor={309.00}></CardWithoutButton>
      <CardWithoutButton image='' title='Serrote' valor={28.90}></CardWithoutButton>
      <CardWithoutButton image='' title='Serra Circular' valor={444.90}></CardWithoutButton>
      <CardWithoutButton image='' title='Chave Philips' valor={8.87}></CardWithoutButton>
      <CardWithoutButton image='' title='Chave Allen' valor={12.49}></CardWithoutButton>
      <CardWithoutButton image='' title='Torquimetro' valor={129.90}></CardWithoutButton>
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
  search: {
    backgroundColor: "#dbdbdb",
    width: "93%",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
  }
});
