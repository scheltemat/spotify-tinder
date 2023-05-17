import React from 'react';
import AuthNavigator from './AuthNavigator';
import {NavigationContainer} from '@react-navigation/native';

export default function AppNavContainer() {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}
