import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import store from './src/redux/store';
import {
  AUTHORIZATION,
  REGISTRATION,
  FLOOR,
  FILM_CARD,
  CINEMA_CARD,
} from './src/enum/navigation.enum';

// components
import FloorMenu from './src/components/FloorMenu.component';
import Authorization from './src/components/screens/Authorization/Authorization.connect';
import Registration from './src/components/screens/Registration/Registration.connect';
import FilmCard from './src/components/screens/FilmCard/FilmCard.connect';
import AddFavFilm from './src/components/screens/Films/AddFavFilm/AddFavFilm.component';
import CinemaCard from './src/components/screens/CinemaCard/CinemaCard.component';
import AddFavCinema from './src/components/screens/CinemaCard/AddFavCinema/AddFavCinema.connect';

// providers
import {TokenProvider} from './src/providers';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
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
            <Stack.Screen
              name={CINEMA_CARD}
              component={CinemaCard}
              options={({route}) => ({
                headerTitle: route.params.name,
                headerRight: () => (
                  <AddFavCinema
                    options={{
                      cinemaId: route.params.cinemaId,
                      userId: route.params.userId,
                    }}
                  />
                ),
              })}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </TokenProvider>
    </Provider>
  );
}

export default App;
