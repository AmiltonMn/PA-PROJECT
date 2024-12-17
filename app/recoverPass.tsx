import { router } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [emailUsuario, setEmailUsuario] = useState<string>("");
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [num3, setNum3] = useState<string>("");
  const [num4, setNum4] = useState<string>("");
  const [num5, setNum5] = useState<string>("");
  const [num6, setNum6] = useState<string>("");

  const sendToLogin = () => {
    router.push('/login')
  }
  
  return (
    <View style={styles.tela}>
      <View style={styles.quadrado}>
        <Text style={styles.login}>Recuperar senha</Text>
        <View>
          <Text style={styles.titulo}>E-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            onChangeText={setEmailUsuario}
            value={emailUsuario}
            placeholderTextColor={'#A8A6A6'}
            keyboardType="default"
          />
        </View>

        <View>
            <Text style={styles.digite}>Digite o código enviado no seu e-mail</Text>
            <View style={styles.quadradinhos}>
                <TextInput
                    style={styles.quadradinho}
                    onChangeText={setNum1}
                    value={num1}
                    keyboardType="number-pad"
                    maxLength={1}
                />
                <TextInput
                    style={styles.quadradinho}
                    onChangeText={setNum2}
                    value={num2}
                    keyboardType="number-pad"
                    maxLength={1}
                />
                <TextInput
                    style={styles.quadradinho}
                    onChangeText={setNum3}
                    value={num3}
                    keyboardType="number-pad"
                    maxLength={1}
                />
                <TextInput
                    style={styles.quadradinho}
                    onChangeText={setNum4}
                    value={num4}
                    keyboardType="number-pad"
                    maxLength={1}
                />
                <TextInput
                    style={styles.quadradinho}
                    onChangeText={setNum5}
                    value={num5}
                    keyboardType="number-pad"
                    maxLength={1}
                />
                <TextInput
                    style={styles.quadradinho}
                    onChangeText={setNum6}
                    value={num6}
                    keyboardType="number-pad"
                    maxLength={1}
                />
            </View>
        </View>

        <TouchableOpacity style={styles.botao} onPress={sendToLogin}>
          <Text style={styles.textBotao}>Enviar</Text>
        </TouchableOpacity>
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
    marginVertical: 23
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
    borderRadius: 5
  },
  image: {
    width: 199,
    height: 120
  },
  digite: {
    fontSize: 10,
    textAlign: 'center'
  },
  quadradinho: {
    backgroundColor: "#192870",
    width: 23,
    height: 29,
    borderRadius: 5,
    color: "#FFFFFF",
    textAlign: 'center'
  },
  quadradinhos: {
    flexDirection: 'row',
    gap: 8,
    paddingVertical: 10
  }
})
