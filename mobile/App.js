import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>QUE DOIDERA MEU!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'white'
  }
});
