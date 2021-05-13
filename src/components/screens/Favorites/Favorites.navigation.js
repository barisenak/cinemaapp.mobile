import Favorites from './Favorites.connect';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

function FavoritesNavigator({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{headerTitle: 'Favorites'}}
      />
    </Stack.Navigator>
  );
}
export default FavoritesNavigator;
