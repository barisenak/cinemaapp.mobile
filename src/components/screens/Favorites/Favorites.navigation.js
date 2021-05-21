import Favorites from './Favorites.connect';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import FilmCard from '../FilmCard/FilmCard.component';
import CinemaCard from '../CinemaCard/CinemaCard.component';
import {FILM_CARD, CINEMA_CARD, FAVORITES} from 'app/enum/navigation.enum';

const Stack = createStackNavigator();

function FavoritesNavigator({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen
        name={FAVORITES}
        component={Favorites}
        options={{headerTitle: FAVORITES}}
      />
      <Stack.Screen
        name={FILM_CARD}
        component={FilmCard}
        options={{headerTitle: 'Card'}}
      />
      <Stack.Screen
        name={CINEMA_CARD}
        component={CinemaCard}
        options={{headerTitle: 'Card'}}
      />
    </Stack.Navigator>
  );
}
export default FavoritesNavigator;
