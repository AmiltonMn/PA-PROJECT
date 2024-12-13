import { MyHeader } from '@/Components/header';
import { HistoryCard } from '@/Components/HistoryCard';
import { router } from 'expo-router';
import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native';

export default function HomeScreen() {

  const data = [
      {
          name: 'Chave Inglesa',
          date: '19/12/24',
          method: 'Cartão de Crédito',
          quantity: 10,
          untiyValue: 14.99,
          totalValue: 149.99
      },
      {
          name: 'Chave de Fenda',
          date: '19/12/24',
          method: 'Cartão de Crédito',
          quantity: 10,
          untiyValue: 14.99,
          totalValue: 149.99
      },
      {
          name: 'Serra elétrica',
          date: '19/12/24',
          method: 'Cartão de Crédito',
          quantity: 10,
          untiyValue: 14.99,
          totalValue: 149.99
      },
      {
        name: 'Serra elétrica',
        date: '19/12/24',
        method: 'Cartão de Crédito',
        quantity: 10,
        untiyValue: 14.99,
        totalValue: 149.99
    },
  ]
    
    const sendToTabs = () => {
        router.push("/(tabs)")
    } 

    return (
        <ScrollView style={styles.tela}>
            <MyHeader text={"Histórico"}></MyHeader>
            {data.map(item => <HistoryCard 
              name={item.name} 
              date={item.date}
              method={item.method}
              quantity={item.quantity}
              unityValue={item.untiyValue}
              totalValue={item.totalValue}
            ></HistoryCard>)}
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
    backgroundColor: '#192870'
  },
});
