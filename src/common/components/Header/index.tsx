import React from 'react';
import {View} from 'react-native';
import {Label} from '../../../assets/icons';
import styles from '../../../navigation/TabBarStack/styles';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {CloseIcon} from '../../../assets/icons/index';

interface HeaderProps {
  isOpenDrawer?: boolean;
}

export default function Header({isOpenDrawer}: HeaderProps) {
  const navigation = useNavigation();
  const handleOpenDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <View style={styles.tabBarHeader}>
      <Label />
      {isOpenDrawer ? (
        <TouchableOpacity style={styles.burgerBtn} onPress={handleOpenDrawer}>
          <CloseIcon />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.burgerBtn} onPress={handleOpenDrawer}>
          <View style={styles.line} />
          <View style={styles.line} />
          <View style={styles.line} />
        </TouchableOpacity>
      )}
    </View>
  );
}
