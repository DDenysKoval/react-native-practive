import React from 'react';
import {
  Dimensions,
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Animal} from '../index';
import {fonts} from '../../../constants/fonts';
import FavoriteIcon from '../../../assets/icons/FavoriteIcon';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {LoggedInStackType} from '../../../navigation/types';
import {ScreenNames} from '../../../constants/screenNames';

interface PetsListProps {
  pets: Animal[];
}

export default function PetsList({pets}: PetsListProps) {
  const navigation = useNavigation<StackNavigationProp<LoggedInStackType>>();
  const handleGoToPet = (item: Animal) => {
    navigation.navigate(ScreenNames.PET_PAGE, {pet: item});
  };
  return (
    <FlatList
      data={pets}
      numColumns={2}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleGoToPet(item)}>
            <ImageBackground
              source={{uri: item.images[0]}}
              imageStyle={{borderRadius: 20}}
              style={styles.image}
              resizeMode={'cover'}>
              <TouchableOpacity style={{alignItems: 'flex-end', margin: 10}}>
                <FavoriteIcon />
              </TouchableOpacity>
              <View style={styles.textContainer}>
                <Text style={styles.text}>{item.type}</Text>
                <Text style={styles.text}>{item.age} years</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  mainContainer: {
    width: '100%',
    marginHorizontal: 10,
  },
  item: {
    height: 200,
    width: Dimensions.get('window').width / 2 - 30,
    margin: 10,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    justifyContent: 'space-between',
  },
  textContainer: {margin: 15},
  text: {
    color: 'white',
    fontFamily: fonts.MontserratSemiBold,
  },
});
