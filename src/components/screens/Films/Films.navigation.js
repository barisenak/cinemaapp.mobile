import React from 'react';
import Films from './Films.connect';
import {createStackNavigator} from '@react-navigation/stack';
import FilmCard from '../FilmCard/FilmCard.connect';
import {FILM_CARD, FILMS} from 'app/enum/navigation.enum';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {styles} from '../Films/Films.styles';

const Stack = createStackNavigator();

function FilmsNavigator({navigation, route}) {
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
        options={{
          headerTitle: 'Card',
          headerRight: () => (
            <MaterialCommunityIcons
              name="star"
              color="#A19DAE"
              size={30}
              style={styles.icon}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export default FilmsNavigator;
