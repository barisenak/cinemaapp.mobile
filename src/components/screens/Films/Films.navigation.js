import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Films from './Films.connect';

import {FILM_CARD, FILMS, CINEMA_CARD, SEARCH} from 'app/enum/navigation.enum';
import {styles} from '../Films/Films.styles';
import Search from '../Search/Search.component';

const Stack = createStackNavigator();

function FilmsNavigator({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Films">
      <Stack.Screen
        name={FILMS}
        component={Films}
        options={{
          headerTitle: FILMS,
          headerRight: () => (
            <MaterialCommunityIcons
              name="magnify"
              color="grey"
              size={30}
              style={styles.icon}
              onPress={() => navigation.navigate(SEARCH, {prevScreen: FILMS})}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export default FilmsNavigator;
