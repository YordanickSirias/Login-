import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const BannerLogin = () => {
  return (
    <View style={styles.container}>
    
      <Image 
        source={require("../assets/IMAGEN/login-pana.png")} 
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>¡Bienvenido!</Text>
      <Text style={styles.subtitle}>Inicia sesión en tu cuenta</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
    marginTop: 20,
    alignItems: 'center',
  },
  logo: {
    width: 150, // Ajusta estos valores
    height: 150, // según el tamaño de tu imagen
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1D256E',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#1F2773',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default BannerLogin;