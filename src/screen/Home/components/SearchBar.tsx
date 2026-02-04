import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../../constants/screenNames';
import {StackNavigationProp} from '@react-navigation/stack';
import {LoggedInStackType} from '../../../navigation/types';
import {SearchIcon, SettingsIcon} from '../../../assets/icons';
import {Animal} from '..';

interface SearchBarProps {
  handleSearch: (text: string) => void;
  pets: Animal[];
}

export default function SearchBar({handleSearch, pets}: SearchBarProps) {
  const [name, setName] = useState('');
  const navigation = useNavigation<StackNavigationProp<LoggedInStackType>>();
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearch(name);
    }, 500);
    return () => clearTimeout(timeout);
  }, [name, handleSearch]);
  const handleNavigateToSettiongs = () => {
    navigation.navigate(ScreenNames.FILTERS_SETTINGS_PAGE, {petsList: pets});
  };
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.searchWrapper}>
        <View style={styles.searchIconWrapper}>
          <SearchIcon />
        </View>
        <TextInput
          placeholder={'Пошук'}
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      <TouchableOpacity
        style={styles.settingsIcon}
        onPress={handleNavigateToSettiongs}>
        <SettingsIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {flexDirection: 'row', alignItems: 'center'},
  searchWrapper: {
    borderRadius: 20,
    backgroundColor: '#EFF1F4',
    height: 40,
    width: Dimensions.get('window').width - 70,
    marginHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
  },
  searchIconWrapper: {marginHorizontal: 20},
  settingsIcon: {
    height: 40,
    width: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EFF1F4',
  },
});
