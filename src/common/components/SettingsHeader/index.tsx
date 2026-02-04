import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {LoggedInStackType} from '../../../navigation/types';
import {fonts} from '../../../constants/fonts';
import {ArrowIcon} from '../../../assets/icons';

export default function SettingsHeader() {
  const navigation = useNavigation<StackNavigationProp<LoggedInStackType>>();
  return (
    <View style={styles.mainWrapper}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={styles.backBtn}>
        <ArrowIcon width={20} height={20} />
      </TouchableOpacity>
      <Text style={styles.title}>Фільтри</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: 'white',
  },
  backBtn: {
    transform: [{rotate: '180deg'}],
  },
  title: {
    flex: 0.62,
    fontFamily: fonts.MontserratSemiBold,
    color: 'black',
  },
});
