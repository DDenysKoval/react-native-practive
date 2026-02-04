import React, {useEffect, useState} from 'react';
import firestore, {
  FirebaseFirestoreTypes,
} from '@react-native-firebase/firestore';
import PetsList from './components/PetsList';
import {ActivityIndicator, View} from 'react-native';
import SearchBar from './components/SearchBar';
import {RouteProp, useRoute} from '@react-navigation/core';
import {ISettings} from '../FilterSettings';

export interface Animal {
  age: number;
  color: string;
  description: string;
  images: string[];
  isDog: boolean;
  isVaccinated: boolean;
  location: string;
  name: string;
  sex: string;
  type: string;
  timeStamp: number;
  size: 'big' | 'medium' | 'small';
}
export default function Home() {
  const [pets, setPets] = useState<Animal[]>([]);
  const route = useRoute<RouteProp<{params: {settings: ISettings}}>>();
  const handleSearchWithSettings = async (settings: ISettings) => {
    try {
      let query: FirebaseFirestoreTypes.Query<FirebaseFirestoreTypes.DocumentData> =
        firestore().collection('animals');
      Object.entries(settings).forEach(([key, value]) => {
        if (key !== 'timeStamp' && value !== null) {
          query = query.where(key, '==', key === 'age' ? +value : value);
        }
      });
      query = query.orderBy('timeStamp', settings.timeStamp ? 'desc' : 'asc');

      const result = await query.get();
      const temp: Animal[] = result.docs.map(e => e.data()) as Animal[];
      setPets(temp);
    } catch (e) {
      console.log('e', e);
    }
  };
  const handleSearch = async (text: string) => {
    try {
      const result = await firestore()
        .collection('animals')
        .orderBy('name')
        .startAt(text)
        .endAt(text + '\uf8ff')
        .get();
      const temp: Animal[] = result.docs.map(e => e.data()) as Animal[];
      setPets(temp);
    } catch (e) {
      console.log('e', e);
    }
  };
  useEffect(() => {
    handleSearchWithSettings(route?.params?.settings);
  }, [route]);

  return (
    <View style={{flex: 1}}>
      <SearchBar handleSearch={handleSearch} pets={pets} />
      {pets.length ? <PetsList pets={pets} /> : <ActivityIndicator />}
    </View>
  );
}
