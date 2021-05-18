import React from 'react';
import Films from './Films.connect';
import {createStackNavigator} from '@react-navigation/stack';
import FilmCard from '../FilmCard/FilmCard.component';

const Stack = createStackNavigator();

function FilmsNavigator({navigation, route}) {
  return (
    <Stack.Navigator initialRouteName="Films">
      <Stack.Screen
        name="Films"
        component={Films}
        options={{headerTitle: 'Films'}}
      />
      <Stack.Screen
        name="FilmCard"
        component={FilmCard}
        options={{headerTitle: 'Card'}}
      />
    </Stack.Navigator>
  );
}
export default FilmsNavigator;
