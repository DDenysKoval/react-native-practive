import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import SettingsHeader from '../../common/components/SettingsHeader';
import {CheckIcon, ENIcon, PLIcon} from '../../assets/icons';
import {fonts} from '../../constants/fonts';
import i18n from '../../../i18.config';
import {useState} from 'react';
import UKRIcon from '../../assets/icons/UKRIcon';

const languages = [
  {code: 'pl', icon: <PLIcon />, text: 'Polish'},
  {code: 'ukr', icon: <UKRIcon />, text: 'Українська'},
  {code: 'en', icon: <ENIcon />, text: 'English'},
];
export default () => {
  const [selected, setSelected] = useState(i18n.language);
  const selectLanguage = (code: string) => {
    i18n.changeLanguage(code);
    setSelected(code);
  };
  return (
    <View>
      <SettingsHeader title={'Налаштування мови '} />
      <View style={{margin: 10, gap: 10}}>
        {languages.map(e => (
          <TouchableOpacity
            style={[
              styles.item,
              selected === e.code && {backgroundColor: '#EAE9FB'},
            ]}
            onPress={() => {
              selectLanguage(e.code);
            }}>
            <View style={styles.iconWrapper}>
              {e.icon}
              <Text style={styles.text}>{e.text}</Text>
            </View>
            {selected === e.code && <CheckIcon />}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    borderRadius: 50,
    borderColor: '#838383',
    borderWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 28,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconWrapper: {alignItems: 'center', flexDirection: 'row', gap: 20},
  text: {fontFamily: fonts.MontserratRegular},
});
