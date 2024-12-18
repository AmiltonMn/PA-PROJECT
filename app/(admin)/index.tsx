import { Card } from '@/Components/card';
import { CardEstoque } from '@/Components/cardEstoque';
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
      <CardEstoque quantidade={90} title='Martelo' valor={123.88}></CardEstoque>
      <CardEstoque quantidade={110} title='Chave Inglesa' valor={20.81}></CardEstoque>
      <CardEstoque quantidade={125} title='Chave de Fenda' valor={4.95}></CardEstoque>
      <CardEstoque quantidade={80} title='Trena' valor={27.90}></CardEstoque>
      <CardEstoque quantidade={85} title='Parafuso' valor={6.04}></CardEstoque>
      <CardEstoque quantidade={95} title='Prego' valor={16.79}></CardEstoque>
      <CardEstoque quantidade={105} title='Nivel' valor={24.19}></CardEstoque>
      <CardEstoque quantidade={115} title='Chave de Boca' valor={15.90}></CardEstoque>
      <CardEstoque quantidade={120} title='Grifo' valor={35.25}></CardEstoque>
      <CardEstoque quantidade={75} title='Macaco' valor={178.18}></CardEstoque>
      <CardEstoque quantidade={130} title='Braçadeira' valor={37.17}></CardEstoque>
      <CardEstoque quantidade={70} title='Parafusadeira' valor={309.00}></CardEstoque>
      <CardEstoque quantidade={135} title='Serrote' valor={28.90}></CardEstoque>
      <CardEstoque quantidade={140} title='Serra Circular' valor={444.90}></CardEstoque>
      <CardEstoque quantidade={50} title='Chave Philips' valor={8.87}></CardEstoque>
      <CardEstoque quantidade={150} title='Chave Allen' valor={12.49}></CardEstoque>
      <CardEstoque quantidade={145} title='Torquimetro' valor={129.90}></CardEstoque>
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
    backgroundColor: '#192870',
    paddingBottom: 15
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
