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
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome!</Text>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F1F3F6', 
    width: '100%',
    alignItems: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
    marginBottom: 10, 
  },
  logo: {
    width: 200,  
    height: 200,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1D256E',
  },

});

export default BannerLogin;