import { Card } from '@/Components/card';
import { MyHeader } from '@/Components/header';
import { StyleSheet, Image, Platform, View, Dimensions, TextInput } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.tela}>
      <MyHeader text={"Produtos"}></MyHeader>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <TextInput style={styles.search}
        placeholder='Pesquise uma ferramenta'
        ></TextInput>
      </View>
      <Card image='../assets/images/home.png' title='Nome da Ferramenta' valor={10.99}></Card>
    </View>
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
