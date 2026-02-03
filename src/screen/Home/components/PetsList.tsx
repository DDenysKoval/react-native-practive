import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {Animal} from '../index';

interface PetsListProps {
  pets: Animal[];
}

export default function PetsList({pets}: PetsListProps) {
  return (
    <FlatList
      data={pets}
      renderItem={({item}) => {
        return (
          <View>
            <Text>{item.name}</Text>
          </View>
        );
      }}
    />
  );
}
