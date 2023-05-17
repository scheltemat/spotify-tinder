import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Register({navigation}: any) {
  return (
    <SafeAreaView>
      <Text>Register An Account</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
