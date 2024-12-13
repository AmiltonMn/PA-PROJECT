import { router } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-native-element-dropdown';
import { Image, StyleSheet, Platform, View, Text, TouchableOpacity, Dimensions, ImageBackground, TextInput } from 'react-native';
import { MyHeader } from '@/Components/header';

export default function HomeScreen() {
    
    const sendToTabs = () => {
        router.push("/(tabs)")
    }

    const user = {
      name: "Fernando",
      email: "email@email.com"
    }

    const data = [
      { label: 'Item 1', value: '1' },
      { label: 'Item 2', value: '2' },
      { label: 'Item 3', value: '3' },
      { label: 'Item 4', value: '4' },
      { label: 'Item 5', value: '5' },
    ];

    const [value, setValue] = useState("");

    return (
        <View style={styles.tela}>
          <MyHeader text={"Perfil"}></MyHeader>
          <View style={styles.imageView}>
            <View style={styles.imageBackground}>
              <Image style={styles.image} source={require("@/assets/images/userPlaceholder.png")}/>
            </View>
            
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.label}>Usuário</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor={'#A8A6A6'}
              keyboardType="default"
              aria-disabled
              value={user.name}
            />
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              placeholderTextColor={'#A8A6A6'}
              keyboardType="default"
              aria-disabled
              value={user.email}
              
            />
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder={data[0].value}
                searchPlaceholder="Search..."
                value={value}
                onChange={item => {
                  setValue(item.value);
                }}
            />
            <TouchableOpacity style={styles.newCardButton}>
              <Text style={styles.buttonText}>Novo cartão</Text>
              <Image style={styles.plusIcon} source={require("@/assets/images/plusIcon.png")}/>
            </TouchableOpacity>
          </View>
        </View>
    );
}

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
  placeholderStyle: {
    fontSize: 16,
    marginLeft: 10,
    color: 'white'
  },
  icon: {
    marginRight: 5,
  },
  selectedTextStyle: {
    fontSize: 16,
    marginLeft: 10,
    color: "white"
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  dropdown: {
    marginTop: 15,
    height: 50,
    width: 228,
    borderBottomColor: 'white',
    backgroundColor: "#F29F05",
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
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
    alignItems: 'center'
  },
  image: {
    width: 90,
    height: 90
  },
  imageBackground: {
    backgroundColor: "#F29F05",
    width: 150,
    height: 150,
    alignItems: 'center',
    marginTop: 50,
    borderRadius: 150,
    justifyContent: 'center'
  },
  imageView: {
    alignItems: 'center'
  },
  userInfo: {
    marginTop: 30
  },
  label: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  input: {
    backgroundColor: "#F29F05",
    paddingHorizontal: 8,
    paddingVertical: 5,
    height: 32,
    width: 228,
    borderRadius: 5,
    borderColor: '#F29F05',
    borderWidth: 1,
    marginTop: 4,
    marginBottom: 12,
    fontSize: 13,
    color: 'white'
  },
  newCardButton: {
    marginTop: 20,
    backgroundColor: '#F29F05',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row'
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  },
  plusIcon: {
    width: 40,
    height: 40
  }
});
