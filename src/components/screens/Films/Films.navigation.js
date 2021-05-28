import React from 'react';
import Films from './Films.connect';
import {createStackNavigator} from '@react-navigation/stack';
import FilmCard from '../FilmCard/FilmCard.connect';
import {FILM_CARD, FILMS} from 'app/enum/navigation.enum';
import AddFavFilm from './AddFavFilm.connect';

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
      <Stack.Screen
        name={FILM_CARD}
        component={FilmCard}
        options={({route}) => ({
          headerTitle: route.params.name,
          headerRight: () => (
            <AddFavFilm
              options={{
                filmId: route.params.filmId,
                userId: route.params.userId,
              }}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
export default FilmsNavigator;
