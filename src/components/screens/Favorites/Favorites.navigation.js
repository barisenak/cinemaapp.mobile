import Favorites from './Favorites.connect';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import {FAVORITES} from 'app/enum/navigation.enum';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';

const Stack = createStackNavigator();

function FavoritesNavigator({navigation, ts}) {
  return (
    <Stack.Navigator initialRouteName="Favorites">
      <Stack.Screen
        name={FAVORITES}
        component={Favorites}
        options={{headerTitle: ts('Favorites')}}
      />
    </Stack.Navigator>
  );
}
export default withTranslation('floorMenu')(FavoritesNavigator);
