import React from 'react';

import {useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {
  AUTHORIZATION,
  REGISTRATION,
  FLOOR,
  FILM_CARD,
  CINEMA_CARD,
  SEATS_CARD,
  TICKET,
  FILMS,
  SEARCH,
} from 'app/enum/navigation.enum';

import FloorMenu from 'app/components/FloorMenu.component';
import Authorization from 'app/components/screens/Authorization/Authorization.connect';
import Registration from 'app/components/screens/Registration/Registration.connect';
import FilmCard from 'app/components/screens/FilmCard/FilmCard.connect';
import AddFavFilm from 'app/components/screens/Films/AddFavFilm/AddFavFilm.connect';
import CinemaCard from 'app/components/screens/CinemaCard/CinemaCard.connect';
import AddFavCinema from 'app/components/screens/CinemaCard/AddFavCinema/AddFavCinema.connect';
import Seats from 'app/components/screens/Seats/Seats.connect';
import Ticket from 'app/components/screens/Ticket/Ticket.connect';
import BackButton from 'app/components/common/BackButton/BackButton.js';
import Search from 'app/components/screens/Search/Search.connect';

import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';
import {getStyle} from 'app/components/FloorMenu.styles';

const Stack = createStackNavigator();

function NavigationProvider({styles, ts}) {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack.Navigator
        initialRouteName={FILMS}
        screenOptions={{
          headerTitleStyle: {
            color: styles.black,
          },

          headerStyle: {backgroundColor: styles.white},
        }}>
        <Stack.Screen
          name={FLOOR}
          component={FloorMenu}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={AUTHORIZATION}
          component={Authorization}
          options={({route, navigation}) => ({
            headerTitle: ts(AUTHORIZATION),
            headerLeft: () => (
              <BackButton route={route} navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen
          name={REGISTRATION}
          component={Registration}
          options={{headerTitle: ts(REGISTRATION)}}
        />
        <Stack.Screen
          name={SEATS_CARD}
          component={Seats}
          options={({route}) => ({
            headerTitle: `${ts('bookingIn')} ${route.params.name}`,
          })}
        />
        <Stack.Screen
          name={TICKET}
          component={Ticket}
          options={({route, navigation}) => ({
            headerTitle: ts(TICKET),
            headerLeft: () => (
              <BackButton route={route} navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen
          name={FILM_CARD}
          component={FilmCard}
          options={({route, navigation}) => ({
            headerTitle: route.params.name,
            headerLeft: () => (
              <BackButton route={route} navigation={navigation} />
            ),

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
        <Stack.Screen
          name={CINEMA_CARD}
          component={CinemaCard}
          options={({route, navigation}) => ({
            headerTitle: route.params.name,
            headerRight: () => (
              <AddFavCinema
                options={{
                  cinemaId: route.params.cinemaId,
                  userId: route.params.userId,
                }}
              />
            ),

            headerLeft: () => (
              <BackButton route={route} navigation={navigation} />
            ),
          })}
        />
        <Stack.Screen
          name={SEARCH}
          component={Search}
          options={({route, navigation}) => ({
            headerTitle: ts(SEARCH),
            headerLeft: () => (
              <BackButton route={route} navigation={navigation} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default withTranslation('floorMenu')(
  withTheme(getStyle)(NavigationProvider),
);
