import React from 'react';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import {HeartIcon, PawIcon} from '../../assets/icons';
import {ScreenNames} from '../../constants/screenNames';
import styles from './styles';
import i18n from '../../../i18.config';

const getName = (name: string) => {
  switch (name) {
    case ScreenNames.FAVORITE_PAGE:
      return i18n.t('favorite');
    case ScreenNames.HOME_PAGE:
      return i18n.t('fluffies');
  }
};

const getIcon = (name: string, focused: boolean) => {
  switch (name) {
    case ScreenNames.FAVORITE_PAGE:
      return <HeartIcon isFocused={focused} color={'#0B0B0B'} />;
    case ScreenNames.HOME_PAGE:
      return <PawIcon isFocused={focused} color={'#0B0B0B'} />;
  }
};

export default function getTabOptions(route): BottomTabNavigationOptions {
  return {
    tabBarStyle: {
      height: 60,
      width: '100%',
      backgroundColor: '#E5F3F5',
      borderTopRightRadius: 50,
      borderTopLeftRadius: 50,
      paddingBottom: 10,
    },
    tabBarShowLabel: false,
    headerShown: false,
    tabBarIcon: ({focused}) => {
      return (
        <View style={styles.tabBarIcon}>
          {getIcon(route.name, focused)}
          <Text
            style={(styles.tabBarText, {color: focused ? 'black' : '#838383'})}>
            {getName(route.name)}
          </Text>
        </View>
      );
    },
  };
}
