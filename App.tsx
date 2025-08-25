import React from 'react';
import './global.css';
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { Text, View, StyleSheet } from 'react-native';
import LandingScreen from './src/common/screens/LandingScreen';

function Appcontent() {
  const inset = useSafeAreaInsets();
  return (
    <SafeAreaView
      style={{
        paddingTop: inset.top + 100,
        paddingBottom: inset.bottom + 100,
        paddingRight: inset.right + 100,
        paddingLeft: inset.left + 100,
      }}
    >
      <LandingScreen />
    </SafeAreaView>
  );
}

function App() {
  return (
    <SafeAreaProvider>
      <Appcontent />
    </SafeAreaProvider>
  );
}

export default App;
