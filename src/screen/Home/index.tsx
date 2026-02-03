import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import PetsList from './components/PetsList';
import {View} from 'react-native';

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
  size: string;
  timeStamp: number;
  type: string;
}

export default function Home() {
  const [pets, setPets] = useState<Animal[]>([]);
  const getPets = async () => {
    try {
      const result = await firestore().collection('animals').get();
      const temp: Animal[] = result.docs.map(e => e.data()) as Animal[];
      setPets(temp);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getPets();
  }, []);

  return (
    <View>
      <PetsList pets={pets} />
    </View>
  );
}
