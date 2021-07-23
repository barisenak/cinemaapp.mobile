import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, HeaderBackButton} from '@react-navigation/stack';
import {PersistGate} from 'redux-persist/integration/react';

import {store, persistor} from './src/redux/store';

import {
  AUTHORIZATION,
  REGISTRATION,
  FLOOR,
  FILM_CARD,
  CINEMA_CARD,
  SEATS_CARD,
  TICKET,
  FILMS,
  TICKETS,
  SEARCH,
  MAP,
} from './src/enum/navigation.enum';

// components
import FloorMenu from './src/components/FloorMenu.component';
import Authorization from './src/components/screens/Authorization/Authorization.connect';
import Registration from './src/components/screens/Registration/Registration.connect';
import FilmCard from './src/components/screens/FilmCard/FilmCard.connect';
import AddFavFilm from './src/components/screens/Films/AddFavFilm/AddFavFilm.connect';
import CinemaCard from './src/components/screens/CinemaCard/CinemaCard.connect';
import AddFavCinema from './src/components/screens/CinemaCard/AddFavCinema/AddFavCinema.connect';
import Seats from './src/components/screens/Seats/Seats.connect';
import Ticket from './src/components/screens/Ticket/Ticket.connect';
import BackButton from './src/components/common/BackButton/BackButton.js';

// providers
import {TokenProvider} from './src/providers';
import Search from './src/components/screens/Search/Search.connect';

const Stack = createStackNavigator();

function App({ts}) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TokenProvider>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Films">
              <Stack.Screen
                name={FLOOR}
                component={FloorMenu}
                options={{headerShown: false}}
              />
              <Stack.Screen
                name={AUTHORIZATION}
                component={Authorization}
                options={{headerTitle: AUTHORIZATION}}
              />
              <Stack.Screen
                name={REGISTRATION}
                component={Registration}
                options={{headerTitle: REGISTRATION}}
              />
              <Stack.Screen
                name={SEATS_CARD}
                component={Seats}
                options={({route}) => ({
                  headerTitle: `Booking in ${route.params.name}`,
                })}
              />
              <Stack.Screen
                name={TICKET}
                component={Ticket}
                options={({route, navigation}) => ({
                  headerTitle: TICKET,
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
                  headerTitle: SEARCH,
                  headerLeft: () => (
                    <BackButton route={route} navigation={navigation} />
                  ),
                })}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </TokenProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
