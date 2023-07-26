import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {RootStackParamList} from '@app/routes/rootStackParamList';
import {ListItemProps} from '@app/types/listPropsDTO';

import styles from './style';

import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

type ProfileScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;

export interface ListProps {
  item: ListItemProps;
}

export const ListCard = ({item}: ListProps) => {
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  function handleNavigation() {
    navigation.navigate('Details', {item: item});
  }
  const {name, category} = item;

  return (
    <TouchableOpacity onPress={handleNavigation} style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text>{category}</Text>
    </TouchableOpacity>
  );
};
