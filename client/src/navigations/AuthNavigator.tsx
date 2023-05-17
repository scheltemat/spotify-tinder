import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../screens/AuthFlow/LandingScreen';
import Login from '../screens/AuthFlow/Login';
import ForgotUsername from '../screens/AuthFlow/ForgotUsername';
import Register from '../screens/AuthFlow/Register';

export default function AuthNavigator() {
  const AuthStack = createNativeStackNavigator();
  return (
    <>
      <AuthStack.Navigator
        screenOptions={{animation: 'none'}}
        initialRouteName={'Landing'}>
        <AuthStack.Screen
          options={{headerShown: false}}
          name={'Landing'}
          component={LandingScreen}
        />
        <AuthStack.Screen
          options={{headerShown: false}}
          name={'Login'}
          component={Login}
        />
        <AuthStack.Screen
          options={{headerShown: false}}
          name={'ForgotUsername'}
          component={ForgotUsername}
        />
        <AuthStack.Screen
          options={{headerShown: false}}
          name={'Register'}
          component={Register}
        />
      </AuthStack.Navigator>
    </>
  );
}
