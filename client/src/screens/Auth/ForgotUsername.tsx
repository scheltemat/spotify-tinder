import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function ForgotUsername({navigation}: any) {
  return (
    <SafeAreaView>
      <Text>Forgot Username or Password</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
