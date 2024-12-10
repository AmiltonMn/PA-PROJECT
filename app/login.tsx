import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';
import { Dimensions, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [emailUsuario, setEmailUsuario] = useState<string>("");
  const [pass, setPass] = useState<string>("");
  
  return (
    <View style={styles.tela}>
      <View style={styles.quadrado}>
        <View>Imagem bla bla bla</View>
        <Text style={styles.login}>Login</Text>
        <View>
          <Text style={styles.titulo}>Usuário ou e-mail</Text>
          <TextInput
            style={styles.input}
            onChangeText={setEmailUsuario}
            value={emailUsuario}
            placeholder="Digite seu e-mail ou usuário"
            placeholderTextColor={'#A8A6A6'}
            keyboardType="default"
          />
        </View>
        <View>
          <Text style={styles.titulo}>Senha</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPass}
            value={pass}
            placeholder="Digite sua senha"
            placeholderTextColor={'#A8A6A6'}
            keyboardType="default"
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.botao}>
          <Text style={styles.textBotao}>Logar</Text>
        </TouchableOpacity>
        <View style={styles.textos}>
          <Text style={styles.textConta}>Não tem conta? </Text>
          <Text style={styles.clique}>Clique aqui</Text>
        </View>
      </View>
    </View>
  );
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  tela: {
    width: width,
    height: height,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#192870'
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 13,
  },
  login: {
    fontWeight: 'bold',
    fontSize: 17,
    marginVertical: 12
  },
  input: {
    backgroundColor: '#EBEBEB',
    paddingHorizontal: 8,
    paddingVertical: 5,
    height: 32,
    width: 228,
    borderRadius: 5,
    borderColor: '#F29F05',
    borderWidth: 1,
    marginTop: 4,
    marginBottom: 12,
    fontSize: 13
  },
  botao: {
    width: 99,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F29F05',
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 22
  },
  textBotao: {
    color: '#FFFFFF',
    fontSize: 17,
  },
  textConta: {
    fontSize: 11
  },
  clique: {
    fontSize: 11,
    color: '#192870',
    fontWeight: 'bold'
  },
  textos: {
    flexDirection: 'row'
  },
  quadrado: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 44,
    paddingBottom: 41,
    borderRadius: 5
  }
})
