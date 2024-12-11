import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, Tabs, router  } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Image, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import 'react-native-reanimated';


// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const sendToTabs = () => {
    router.push('/(tabs)')
  }
  
  return (
    <Stack>
      <Stack.Screen name='login' options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name='register' options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name='recoverPass' options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name='(tabs)' options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name='index' options={{headerShown: false}}></Stack.Screen>
    </Stack>
  );
}

const styles = StyleSheet.create({

  image: {
    width: 40,
    height: 40
  }
})
