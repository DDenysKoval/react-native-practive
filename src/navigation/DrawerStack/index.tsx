import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ScreenNames} from '../../constants/screenNames';
import TabBarStack from '../TabBarStack';
import {DrawerStackType} from '../types';
import {Dimensions} from 'react-native';
import Header from '../../common/components/Header';
import DrawerContent from '../../common/components/DrawerContent/index';

const Drawer = createDrawerNavigator<DrawerStackType>();

export default function DrawerStack() {
  return (
    <Drawer.Navigator
      initialRouteName={ScreenNames.TAB_BAR_STACK}
      drawerContent={() => <DrawerContent />}
      screenOptions={{
        header: () => <Header />,
        drawerPosition: 'right',
        drawerStyle: {
          width: Dimensions.get('window').width,
        },
      }}>
      <Drawer.Screen name={ScreenNames.TAB_BAR_STACK} component={TabBarStack} />
    </Drawer.Navigator>
  );
}
