import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

export default function App() {
  const [mensaje, setMensaje] = useState('Hola que tal?');

  const cambiarMensaje = () => {
    setMensaje('Todo bien?');
  };

  return (
    <ImageBackground
      source={{uri:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'}}
      style={styles.container}
    >
      <View style={styles.container}>
        <Text style={styles.texto}>{mensaje}</Text>
        <Text style={[styles.textoBoton, styles.boton]} onPress={cambiarMensaje}>Cambiar Mensaje</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 25,
    color: '#fff',
  },
  boton: {
    margin:10,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
  },
  textoBoton: {
    color: '#000',
    fontSize: 15,
  },
});
