import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View>
      <Text style={styles.italicText}>Vem</Text>
      <Text style={styles.semiBoldText}>Semi Bold</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  italicText: {
    fontStyle: 'italic',
    alignSelf: 'flex-start',
    marginTop: 10, // Não coloque 'px' para valores de margem em React Native
    fontSize: 16, // Não coloque 'px' para valores de tamanho de fonte em React Native
  },
  semiBoldText: {
    fontStyle: 'italic',
    alignSelf: 'flex-start',
    fontSize: 16, // Não coloque 'px' para valores de tamanho de fonte em React Native
    fontWeight: '600', // Use 'fontWeight' para definir a espessura da fonte
  },
});
