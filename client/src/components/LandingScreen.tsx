import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
} from 'react-native';
import React from 'react';

export default function LandingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={[styles.text, {marginBottom: '2%'}]}>Welcome</Text>
      <View style={styles.button}>
        <Button
          title="Get Started"
          onPress={() =>
            Alert.alert('You silly goose, this doesnt do anything yet!')
          }
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
  text: {
    fontSize: 30,
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
  },
});
