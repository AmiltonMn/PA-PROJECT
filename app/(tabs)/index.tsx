import { MyHeader } from '@/Components/header';
import { Image, StyleSheet, Platform, View, Dimensions } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.tela}>
      <MyHeader text={'Sobre nós'}></MyHeader>
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
