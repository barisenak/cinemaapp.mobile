import Favorites from './Favorites.connect';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import FilmCard from '../FilmCard/FilmCard.component';
import CinemaCard from '../CinemaCard/CinemaCard.component';

const Stack = createStackNavigator();

function FavoritesNavigator({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{headerTitle: 'Favorites'}}
      />
      <Stack.Screen
        name="FilmCard"
        component={FilmCard}
        options={{headerTitle: 'Card'}}
      />
      <Stack.Screen
        name="CinemaCard"
        component={CinemaCard}
        options={{headerTitle: 'Card'}}
      />
    </Stack.Navigator>
  );
}
export default FavoritesNavigator;
