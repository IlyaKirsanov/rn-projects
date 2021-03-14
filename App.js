import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

const fetchFonts = () => {
  return Font.loadAsync({
    'proxima-nova': require('./assets/fonts/ProximaNova-Reg.otf'),
    'proxima-nova-bold': require('./assets/fonts/ProximaNova-Bold.otf'),
    'proxima-nova-black': require('./assets/fonts/ProximaNova-Black.otf'),
    'proxima-nova-extrabold': require('./assets/fonts/ProximaNova-Extrabold.otf'),
    'montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    'montserrat-black': require('./assets/fonts/Montserrat-Black.ttf'),
    'montserrat-extrabold': require('./assets/fonts/Montserrat-ExtraBold.ttf'),
  })
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return <AppLoading
      startAsync={fetchFonts}
      onFinish={() => setFontLoaded(true)}
      onError={() => console.log(error)}
    />
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({

});
