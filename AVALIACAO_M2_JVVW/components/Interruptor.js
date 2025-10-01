import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

// componente Interruptor
export default function Interruptor({ nome }) {
  // estado que guarda se está ligado ou desligado
  const [ligado, setLigado] = useState(false);

  return (
    <View style={styles.container}>
      {/* mostra o nome e o estado atual */}
      <Text style={styles.texto}>
        {nome}: {ligado ? 'Ligado' : 'Desligado'}
      </Text>

      {/* Interruptor */}
      <Switch
        value={ligado} // se está ligado ou não
        onValueChange={(valor) => setLigado(valor)} // troca quando desliza
        thumbColor={ligado ? '#fff' : '#f4f3f4'} // cor do botão
        trackColor={{ false: '#767577', true: '#4CAF50' }} // cor da barra
      />
    </View>
  );
}

// estilos
const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    flexDirection: 'row', // deixa o texto e o switch lado a lado
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  texto: {
    fontSize: 16
  }
});
