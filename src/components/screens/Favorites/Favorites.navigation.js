import Favorites from './Favorites.connect';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import Authorization from 'app/components/screens/Authorization/Authorization.connect';
import Registration from 'app/components/screens/Registration/Registration.component';
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
        name="Authorization"
        component={Authorization}
        options={{headerTitle: 'Authorization'}}
      />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{headerTitle: 'Registration'}}
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
