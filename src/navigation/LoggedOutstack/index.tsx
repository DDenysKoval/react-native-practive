import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoggedOutStackType} from '../types';
import RegisterPage from '../../screen/Auth/Registration';
import {ScreenNames} from '../../constants/screenNames';
import LoginPage from '../../screen/Auth/Login';

const Stack = createNativeStackNavigator<LoggedOutStackType>();

export default function LoggedOutStack() {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.LOGIN_PAGE}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenNames.LOGIN_PAGE} component={LoginPage} />
      <Stack.Screen
        name={ScreenNames.REGISTRATION_PAGE}
        component={RegisterPage}
      />
    </Stack.Navigator>
  );
}
