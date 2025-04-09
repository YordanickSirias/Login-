import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const CuerpoLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login your account</Text>

      {/* Campo de Email */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="ejemplo@email.com"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <MaterialCommunityIcons 
            name="email" 
            size={20} 
            color="#FFA500"
            style={styles.rightIcon}
          />
        </View>
      </View>

      {/* Campo de Password */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Enter your password"
            placeholderTextColor="#999"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <MaterialCommunityIcons 
            name="lock" 
            size={20} 
            color="#FFA500"
            style={styles.rightIcon}
          />
        </View>
      </View>

      {/* Enlace "Forgot password" */}
      <TouchableOpacity style={styles.forgotLink}>
        <Text style={styles.linkText}>Forgot your password?</Text>
      </TouchableOpacity>

      {/* Botón "Login Now" */}
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login Now</Text>
      </TouchableOpacity>

      {/* Botón "Signup Now" (nuevo) */}
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Signup Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1D256E',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#1D256E',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    paddingLeft: 15,
    paddingVertical: 0,
    paddingRight: 30, // Evita solapamiento con ícono
  },
  rightIcon: {
    marginLeft: 10,
  },
  forgotLink: {
    alignSelf: 'flex-end',
    marginBottom: 20,

    
  },
  linkText: {
    color: '#FFA500',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#FFA500',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signupButton: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FFA500',
  },
  signupButtonText: {
    color: '#FFA500',
    fontSize: 18,
    fontWeight: 'bold',
  },

  linkText: {
    color: '#1E2772',  // Cambia este valor al color que desees (ej: rojo)
    fontSize: 14,
    // Opcional: añade subrayado
    textDecorationLine: 'underline', 
  },


  
});

export default CuerpoLogin;