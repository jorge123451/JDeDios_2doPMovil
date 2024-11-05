// HomeScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#68c3ee', '#4f65de']} // Degradado de azul claro a azul marino
      style={styles.container}
    >
      {/* Imagen centrada */}
      <Image source={require('../assets/icon Calendar.png')} style={styles.image} />
      
      {/* Mensaje de bienvenida */}
      <Text style={styles.text}>¡Bienvenido a la aplicación de gestión de proyectos!</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: 150,  // Ajusta el tamaño de la imagen
    height: 150,
    marginBottom: 20,  // Espacio entre la imagen y el texto
    resizeMode: 'contain',  // Asegura que la imagen se ajuste sin distorsión
  },
  text: {
    fontSize: 18,
    color: '#FFFFFF',  // Texto en blanco para contraste
    textAlign: 'center',
    marginTop: 20,  // Mueve un poco hacia abajo el mensaje de bienvenida
  },
});

