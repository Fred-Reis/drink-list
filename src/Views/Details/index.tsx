import React from 'react';
import {Text, View, SafeAreaView, ScrollView} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

import {useNavigation, useRoute} from '@react-navigation/native';

import {ListProps} from '@app/components/ListCard';
import styles from './style';

function Details() {
  const {params} = useRoute();
  const {item}: ListProps = params;

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Icon
          name="leftcircleo"
          size={25}
          color="#414141"
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>Drink Details</Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.cardRow}>
          <Text style={styles.cardText}>Name:</Text>
          <Text>{item.name}</Text>
        </View>

        {item.category && (
          <View style={styles.cardRow}>
            <Text style={styles.cardText}>Category:</Text>
            <Text>{item.category}</Text>
          </View>
        )}

        {item.glass && (
          <View style={styles.cardRow}>
            <Text style={styles.cardText}>Glass:</Text>
            <Text>{item.glass}</Text>
          </View>
        )}

        {item.garnish && (
          <View style={styles.cardRow}>
            <Text style={styles.cardText}>Garnish:</Text>
            <Text>{item.garnish}</Text>
          </View>
        )}

        {item.preparation && (
          <View>
            <Text style={styles.cardText}>Preparation:</Text>
            <ScrollView>
              <Text>{item.preparation}</Text>
            </ScrollView>
          </View>
        )}

        {item.ingredients && (
          <View>
            <Text style={styles.cardText}>Ingredients:</Text>
            <ScrollView>
              {item.ingredients.map(ing => {
                return ing.special ? (
                  <Text key={ing.ingredient}>Special: {ing.special}</Text>
                ) : (
                  <Text key={ing.ingredient}>
                    {ing.label && ing.label} {ing.ingredient}: {ing.amount}{' '}
                    {ing.unit}
                  </Text>
                );
              })}
            </ScrollView>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

export default Details;
