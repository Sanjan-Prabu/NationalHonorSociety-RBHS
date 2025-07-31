/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { Text, StyleSheet, View } from 'react-native';

function App() {


  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      W lessgo
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
  },
  text:{
    color:"red",

  }
});

export default App;
