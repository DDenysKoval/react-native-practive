import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../Header';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fonts} from '../../../constants/fonts';
import {ArrowIcon} from '../../../assets/icons';

export default function Drawercontent() {
  return (
    <View>
      <Header isOpenDrawer={true} />
      <TouchableOpacity style={styles.btnWrapper}>
        <Text style={styles.text}>Наш сайт</Text>
        <ArrowIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper}>
        <Text style={styles.text}>Налаштування мови</Text>
        <ArrowIcon />
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnWrapper}>
        <Text style={styles.text}>Вийти</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {marginHorizontal: 10, gap: 16},
  btnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: fonts.ComfortaaRegular,
    fontSize: 16,
    color: 'black',
  },
});
