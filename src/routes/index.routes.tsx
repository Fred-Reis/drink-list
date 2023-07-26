import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {RootStackParamList} from './rootStackParamList';

import HomeScreen from '@app/Screens/Home';
import DetailsScreen from '@app/Screens/Details';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Details" component={DetailsScreen} />
    </Navigator>
  );
};

export default Routes;
