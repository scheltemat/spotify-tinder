import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {colors} from '../../constants/colors';

export default function Login({navigation}: any) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.container}>
            <TextInput style={styles.textInput} placeholder="Username" />
            <TextInput style={styles.textInput} placeholder="Password" />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Login</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{marginTop: 20}}
              onPress={() => navigation.navigate('ForgotUsername')}>
              <Text style={styles.linkText}>Forgot Username or Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{marginTop: 20}}
              onPress={() => navigation.navigate('Register')}>
              <Text style={[styles.linkText, {fontWeight: 'bold'}]}>
                Register a New Account
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  textInput: {
    borderColor: 'grey',
    borderRadius: 10,
    borderWidth: 1,
    width: '90%',
    height: 40,
    paddingHorizontal: 15,
    marginBottom: '2%',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.linkText,
    marginTop: 20,
  },
  buttonText: {
    color: colors.white,
  },
  linkText: {
    color: colors.linkText,
  },
});
