import Favorites from './Favorites.connect';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {FAVORITES} from 'app/enum/navigation.enum';

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
