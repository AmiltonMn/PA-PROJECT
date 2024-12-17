import { getTabBarHeight } from '@react-navigation/bottom-tabs/lib/typescript/commonjs/src/views/BottomTabBar';
import { Tabs } from 'expo-router';
import React from 'react';
import { Dimensions, Image, Platform, StyleSheet } from 'react-native';

export default function TabLayout() {

  return (
    <>
      <Tabs screenOptions={{tabBarStyle: {width: '100%', height: 70, paddingTop: 15, backgroundColor: "#F29F05", borderColor: '#F29F05',}}}>
        <Tabs.Screen name='index' options={{headerShown: false, 
        tabBarIcon: () => (
        <>
          <Image style={styles.image} source={require("@/assets/images/home.png")}/>
        </>),
        tabBarLabel: "",
       }}></Tabs.Screen>
        <Tabs.Screen name='explore' options={{headerShown: false, 
        tabBarIcon: () => (
        <>
          <Image style={styles.image} source={require("@/assets/images/tools.png")}/>
        </>), 
        tabBarLabel: ""}}></Tabs.Screen>
        <Tabs.Screen name='history' options={{headerShown: false, 
        tabBarIcon: () => (
        <>
          <Image style={styles.image} source={require("@/assets/images/history.png")}/>
        </>), 
        tabBarLabel: ""}}></Tabs.Screen>
        <Tabs.Screen name='cart' options={{headerShown: false, 
        tabBarIcon: () => (
        <>
          <Image style={styles.image} source={require("@/assets/images/cart.png")}/>
        </>), 
        tabBarLabel: ""}}></Tabs.Screen>
      </Tabs>
    </>
  );
}

const styles = StyleSheet.create({

  image: {
    width: 40,
    height: 40
  },
})