import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OneColumn from './Screens/OneColumn';
import TwoColumn from './Screens/TwoColumn';

const Stack = createNativeStackNavigator();

function backLogoTitle() {
  return (
    <Image
      styles={{ width: 50, height: 50 }}
      source={require('./assets/Arrow-Back--Streamline-Outlined----Material-Symbols.svg')}
    ></Image>
  );
}

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="OneColumn" component={OneColumn} options={{
          headerTitle: "Chat",
          headerTitleStyle: {
            fontSize: 24,
            color: "#fff"
          },
          headerTitleAlign: "center",
          headerRight: () => (
            <Image
              source={require('./assets/Cart-Check--Streamline-Bootstrap.png')}
            ></Image>
          ),
          headerLeft: () => (
            <Image
              source={require('./assets/Arrow-Back--Streamline-Outlined----Material-Symbols.png')}
            ></Image>
          ),
          headerStyle: {
            backgroundColor: "#1BA9FF",
          }
        }}/> */}
        <Stack.Screen name="TwoColumn" component={TwoColumn} options={{
          headerTitle: () => (
            <TextInput style={{width: 192, height: 30, backgroundColor: '#fff', paddingLeft: 30}} placeholder='Dây cáp usb'></TextInput>
          ),
          headerTitleStyle: {
            fontSize: 24,
            color: "#fff"
          },
          headerTitleAlign: "center",
          headerRight: () => (
            <Image
              source={require('./assets/Cart-Check--Streamline-Bootstrap.png')}
            ></Image>
          ),
          headerLeft: () => (
            <Image
              source={require('./assets/Arrow-Back--Streamline-Outlined----Material-Symbols.png')}
            ></Image>
          ),
          headerStyle: {
            backgroundColor: "#1BA9FF",
          }
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
