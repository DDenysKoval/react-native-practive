import React from 'react-native';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from '../../styles';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '../../../../constants/screenNames';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigation} from '../../../../navigation/types';

interface IAuthHeaderProps {
  activeTab: 'login' | 'registration';
}

export default function AuthHeader({activeTab}: IAuthHeaderProps) {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigation>>();
  const navigateToLogin = () => {
    navigation.navigate(ScreenNames.LOGIN_PAGE);
  };
  const navigateToRegistration = () => {
    navigation.navigate(ScreenNames.REGISTRATION_PAGE);
  };
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Раді тебе вітати!</Text>
        <Text style={styles.welcomeText}>
          Кожен пухнастик заслуговує на дбайливих господарів. Ми допоможемо тобі
          знайти друга.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={navigateToLogin}
          style={activeTab === 'login' ? styles.activeTab : styles.disabledTab}>
          <Text style={styles.authText}>Вхід</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigateToRegistration}
          style={
            activeTab === 'registration' ? styles.activeTab : styles.disabledTab
          }>
          <Text style={styles.authText}>Реестрація</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
