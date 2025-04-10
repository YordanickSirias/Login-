import React from 'react';
import { View, StyleSheet } from 'react-native';
import Banner from './Componentes/Banner';
import CuerpoLogin from './Componentes/CuerpoLogin';

const App = () => {
  return (
    <View style={styles.container}>
      <Banner   />
      <CuerpoLogin />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;