import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoggedInStackType} from '../types';
import {ScreenNames} from '../../constants/screenNames';
import DrawerStack from '../DrawerStack';
import FilterSettings from '../../screen/FilterSettings';
import SettingsHeader from '../../common/components/SettingsHeader';
import PetPage from '../../screen/PetPage';

const Stack = createNativeStackNavigator<LoggedInStackType>();

export default function LoggedInStack() {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.DRAWER_STACK}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={ScreenNames.DRAWER_STACK} component={DrawerStack} />
      <Stack.Screen
        name={ScreenNames.FILTERS_SETTINGS_PAGE}
        component={FilterSettings}
        options={{
          headerShown: true,
          header: () => <SettingsHeader />,
        }}
      />
      <Stack.Screen
        name={ScreenNames.PET_PAGE}
        component={PetPage}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
