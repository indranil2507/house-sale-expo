import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
// import AppLoading from 'expo-app-loading';
// import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

// export default function App() {
//   let [fontsLoaded] = useFonts({
//     Inter_900Black,
//   });

//   if (!fontsLoaded) {
//     // return <AppLoading />;
//     return <Text >Loading</Text>;
//   }

//   return <Text style={{ fontFamily: 'Inter_900Black' }}>Inter Black</Text>;
// }

export default function App() {
  return (
     <Home/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
