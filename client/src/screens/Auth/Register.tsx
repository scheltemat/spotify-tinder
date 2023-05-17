import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import React from 'react';
import {colors} from '../../constants/colors';

export default function Register({navigation}: any) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.container}>
            <View
              style={{
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TextInput style={[styles.textInput, {width: '48%'}]} placeholder="First Name" />
              <TextInput style={[styles.textInput, {width: '48%'}]} placeholder="Last Name" />
            </View>
            <TextInput style={styles.textInput} placeholder="Email" />
            <TextInput style={styles.textInput} placeholder="Username" />
            <TextInput style={styles.textInput} placeholder="Password" />
            <TextInput style={styles.textInput} placeholder="Confirm Password" />
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
            </View>
            <View style={{alignItems: 'center', marginTop: 20}}>
              <Text>Already have an Account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.linkText, {fontWeight: 'bold'}]}>Login</Text>
              </TouchableOpacity>
            </View>
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
