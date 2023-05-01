import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import React from 'react';

export default function LandingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Temporary Landing Screen</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
