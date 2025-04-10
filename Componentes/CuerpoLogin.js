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
          <View style={styles.iconBackground}>
            <MaterialCommunityIcons 
              name="email" 
              size={30} 
              color="white"
            />
          </View>
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
          <View style={styles.iconBackground}>
            <MaterialCommunityIcons 
              name="lock" 
              size={30} 
              color="white"
            />
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.forgotLink}>
        <Text style={styles.linkText}>Forgot your password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login Now</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>Signup Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingTop:20,
    paddingBottom: 40,
    backgroundColor:"##F1F3F6"
   
   
  },
  header: {
    fontSize: 24,
    fontWeight: '600',
    color: '#1D256E',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputContainer: {
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: '#1D256E',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  inputWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
    paddingLeft: 15,
    paddingRight: 60,
  },
  iconBackground: {
    position: 'absolute',
    right: 0,
    width: 70,
    height: '100%',
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgotLink: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  linkText: {
    color: '#1E2772',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: '#FFA500',
    height: 50,
    borderRadius: 10,
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
});

export default CuerpoLogin;