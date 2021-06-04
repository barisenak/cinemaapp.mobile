import React from 'react';
import Films from './Films.connect';
import {createStackNavigator} from '@react-navigation/stack';
import FilmCard from '../FilmCard/FilmCard.connect';
import {FILM_CARD, FILMS, CINEMA_CARD} from 'app/enum/navigation.enum';
import AddFavFilm from './AddFavFilm/AddFavFilm.connect';
import CinemaCard from '../CinemaCard/CinemaCard.connect';
import AddFavCinema from '../CinemaCard/AddFavCinema/AddFavCinema.connect';

const Stack = createStackNavigator();

function FilmsNavigator() {
  return (
    <Stack.Navigator initialRouteName="Films">
      <Stack.Screen
        name={FILMS}
        component={Films}
        options={{
          headerTitle: FILMS,
        }}
      />
    </Stack.Navigator>
  );
}
export default FilmsNavigator;
