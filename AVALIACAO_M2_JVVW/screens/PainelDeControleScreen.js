import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Interruptor from '../components/Interruptor';

// tela principal do painel de controle
export default function PainelDeControleScreen() {
  return (
    <View style={styles.container}>
      {/* titulo da tela */}
      <Text style={styles.titulo}>Painel de Controle da Casa</Text>

      {/* tres interruptores diferentes */}
      <Interruptor nome="Luz da Sala" />
      <Interruptor nome="Ar Condicionado" />
      <Interruptor nome="Luz do Quarto" />
    </View>
  );
}

// estilos
const styles = StyleSheet.create({
  container: {
    flex: 1, // ocupa toda a tela
    padding: 20,
    backgroundColor: '#fff'
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold', // negrito
    marginBottom: 20
  }
});
