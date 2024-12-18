import { Card } from '@/Components/card';
import { FlowCard } from '@/Components/FlowCard';
import { MyHeader } from '@/Components/header';
import { StyleSheet, Image, Platform, View, Dimensions, TextInput, ScrollView } from 'react-native';

export default function TabTwoScreen() {

    const data = [
        {
            tipo: "Entrada",
            titulo: "Venda de Chave de Fenda",
            cliente: "Pedro chaves",
            valor: 20.99,
            data: "22/05/2024"
        },
        {
            tipo: "Saída",
            titulo: "Frete",
            cliente: "Pedro chaves",
            valor: 10.99,
            data: "21/05/2024"
        },
        {
            tipo: "Entrada",
            titulo: "Venda de Serra Circular",
            cliente: "Pedro chaves",
            valor: 889.80,
            data: "21/05/2024"
        },
        {
            tipo: "Saída",
            titulo: "Reforma",
            cliente: "Pedro Reformas",
            valor: 200.99,
            data: "19/05/2024"
        },
        {
            tipo: "Saída",
            titulo: "Imposto",
            cliente: "Pedro Governos",
            valor: 1239.99,
            data: "16/05/2024"
        },
        {
            tipo: "Entrada",
            titulo: "Venda de Chave Allen",
            cliente: "Juan Diego",
            valor: 24.98,
            data: "14/05/2024"
        },
        {
            tipo: "Saída",
            titulo: "Picolé",
            cliente: "Pedro Picolés",
            valor: 200.59,
            data: "11/05/2024"
        },
        {
            tipo: "Entrada",
            titulo: "Venda de Trena",
            cliente: "Pedro Trenas",
            valor: 20.99,
            data: "22/04/2024"
        },
        {
            tipo: "Entrada",
            titulo: "Venda de Parafusadeira",
            cliente: "Pedro Parafusos",
            valor: 1236.00,
            data: "22/04/2024"
        },
        {
            tipo: "Entrada",
            titulo: "Venda de Parafuso",
            cliente: "Pedro Parafusos",
            valor: 60.40,
            data: "22/04/2024"
        },
        {
            tipo: "Entrada",
            titulo: "Venda de Pregos",
            cliente: "Pedro Parafusos",
            valor: 671.60,
            data: "22/04/2024"
        },
        {
            tipo: "Saída",
            titulo: "Novas Ferramentas",
            cliente: "Bosch",
            valor: 25000.32,
            data: "20/01/2024"
        },
        {
            tipo: "Saída",
            titulo: "Salário funcionários",
            cliente: "Funcionários",
            valor: 40000.00,
            data: "19/01/2024"
        },
        {
            tipo: "Saída",
            titulo: "Reforma Recepção",
            cliente: "Pedro Reformas",
            valor: 3250.99,
            data: "18/05/2024"
        },
    ]

    return (
        <ScrollView style={styles.tela}>
        <MyHeader text={"Produtos"}></MyHeader>
        <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 20}}>
            <TextInput style={styles.search}
            placeholder='Buscar lançamento'
            ></TextInput>
            <View style={{width: '93%', marginTop: 30}}>
                {data.map( item => <FlowCard
                    tipo={item.tipo}
                    titulo={item.titulo}
                    cliente={item.cliente}
                    valor={item.valor}
                    data={item.data}
                ></FlowCard>

                )}
            </View>
        </View>
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
