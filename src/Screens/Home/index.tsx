import React, {useState, useEffect} from 'react';
import {Text, View, FlatList, SafeAreaView} from 'react-native';

import {ListItemProps} from '@app/types/listPropsDTO';
import {ListCard} from '@app/components/ListCard';

import api from '@app/service/api.serve';

import styles, {listStyle} from './style';

function Home() {
  const [recipesData, setRecipesData] = useState<ListItemProps[]>([]);

  useEffect(() => {
    (async function getData() {
      const response = await api.get<ListItemProps[]>('');

      const orderedList: ListItemProps[] = response.data.sort((a, b) =>
        a.name.localeCompare(b.name),
      );

      setRecipesData(orderedList);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Drinks List</Text>
      </View>
      <FlatList
        data={recipesData}
        renderItem={({item}) => <ListCard item={item} />}
        keyExtractor={item => item.name}
        contentContainerStyle={listStyle}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

export default Home;
