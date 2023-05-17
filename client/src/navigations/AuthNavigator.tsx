import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../screens/Auth/LandingScreen';
import Login from '../screens/Auth/Login';
import ForgotUsername from '../screens/Auth/ForgotUsername';
import Register from '../screens/Auth/Register';

export default function AuthNavigator() {
  const AuthStack = createNativeStackNavigator();
  return (
    <>
      <AuthStack.Navigator screenOptions={{animation: 'none'}} initialRouteName={'Landing'}>
        <AuthStack.Screen options={{headerShown: false}} name={'Landing'} component={LandingScreen} />
        <AuthStack.Screen options={{headerShown: false}} name={'Login'} component={Login} />
        <AuthStack.Screen options={{headerShown: false}} name={'ForgotUsername'} component={ForgotUsername} />
        <AuthStack.Screen options={{headerShown: false}} name={'Register'} component={Register} />
      </AuthStack.Navigator>
    </>
  );
}
