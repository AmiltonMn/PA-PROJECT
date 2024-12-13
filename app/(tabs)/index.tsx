import { MyHeader } from '@/Components/header';
import { Image, StyleSheet, Platform, View, Dimensions, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.tela}>
      <MyHeader text={'Sobre nós'}></MyHeader>
      <View style={styles.quadrados}>
        <View style={styles.quadrado}>
          <Text style={styles.title}>Nossa História</Text>
          <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut leo leo. Nulla lobortis dolor at vehicula iaculis. Ut eget lacus in dolor varius vestibulum nec at odio. Quisque bibendum ornare sem, et ornare magna tempor eget. </Text>
        </View>
        <View style={styles.quadrado}>
          <Text style={styles.title}>Visão</Text>
          <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut leo leo. Nulla lobortis dolor at vehicula iaculis. Ut eget lacus in dolor varius vestibulum nec at odio. Quisque bibendum ornare sem, et ornare magna tempor eget. </Text>
        </View>
        <View style={styles.quadrado}>
          <Text style={styles.title}>Missão</Text>
          <Text style={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut leo leo. Nulla lobortis dolor at vehicula iaculis. Ut eget lacus in dolor varius vestibulum nec at odio. Quisque bibendum ornare sem, et ornare magna tempor eget. </Text>
        </View>
      </View>
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
  }
});
