import { CardWithoutButton } from '@/Components/CardWithoutButton';
import { MyHeader } from '@/Components/header';
import { router } from 'expo-router';
import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, Dimensions } from 'react-native';

export default function HomeScreen() {
    
    const sendToTabs = () => {
        router.push("/(tabs)")
    } 

    return (
        <View style={styles.tela}>
            <MyHeader text={"Carrinho"}></MyHeader>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <View style={{width: '92%', height: 100, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{alignItems: 'center', color: 'white', fontSize: 15, fontWeight: 'bold'}}>
                  Valor Total:
                </Text>
                <View style={{backgroundColor: "#ffffff", height: 100, alignItems: 'center', justifyContent: 'center', width: '70%', borderRadius: 5}}>
                  <Text style={{fontSize: 17, fontWeight: 'bold'}}>
                    Fica aqui o valor todo
                  </Text>
                </View>
              </View>
            </View>
            <CardWithoutButton title='Ferramenta' valor={10.99} image=''></CardWithoutButton>
        </View>
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
    backgroundColor: '#192870'
  },
});
