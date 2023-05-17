import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';
import React from 'react';

export default function LandingScreen({navigation}: any) {
  const handleNavigation = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize: 30, marginBottom: '2%'}}>Welcome</Text>
      <View style={styles.button}>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
});
