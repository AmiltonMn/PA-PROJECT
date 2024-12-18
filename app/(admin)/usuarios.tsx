import { CardUser } from '@/Components/cardUser';
import { MyHeader } from '@/Components/header';
import { Image, StyleSheet, Platform, View, Dimensions, Text, ScrollView, TextInput } from 'react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.tela}>
      <MyHeader text={'Sobre nós'}></MyHeader>
      <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
        <TextInput style={styles.search}
        placeholder='Pesquise um usuario'
        ></TextInput>
      </View>
      <CardUser admin={true} email='email@email.com' nome='Admin'></CardUser>
      <CardUser admin={false} email='email@email.com' nome='Admin'></CardUser>
      <CardUser admin={true} email='email@email.com' nome='Admin'></CardUser>
      <CardUser admin={false} email='email@email.com' nome='Admin'></CardUser>
      <CardUser admin={false} email='email@email.com' nome='Admin'></CardUser>
      <CardUser admin={false} email='email@email.com' nome='Admin'></CardUser>
      <CardUser admin={false} email='email@email.com' nome='Admin'></CardUser>
    </ScrollView>
  );
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  tela: {
    width: width,
    height: height,
    backgroundColor: '#192870',
    
  },
  title: {
    color: "#F29F05",
    fontSize: 20,
    fontWeight: "bold"
  },
  desc: {
    fontSize: 20
  },
  quadrado: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 5
  },
  quadrados: {
    padding: 16,
    gap: 17
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
