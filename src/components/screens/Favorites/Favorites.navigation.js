import Favorites from './Favorites.connect';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

// REVIEW: Please remove unneeded imports
import FilmCard from '../FilmCard/FilmCard.connect';
import CinemaCard from '../CinemaCard/CinemaCard.connect';
import {FILM_CARD, CINEMA_CARD, FAVORITES} from 'app/enum/navigation.enum';
import AddFavCinema from '../CinemaCard/AddFavCinema/AddFavCinema.connect';
import AddFavFilm from '../Films/AddFavFilm/AddFavFilm.connect';

const Stack = createStackNavigator();

function FavoritesNavigator({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen
        name={FAVORITES}
        component={Favorites}
        options={{headerTitle: FAVORITES}}
      />
    </Stack.Navigator>
  );
}
export default FavoritesNavigator;
