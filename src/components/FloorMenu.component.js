import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FavoritesScreenNavigator from './screens/Favorites/Favorites.navigation';
import FilmsScreenNavigator from './screens/Films/Films.navigation';
import TicketsScreenNavigator from './screens/Tickets/Tickets.navigation';
import MapScreenNavigator from './screens/Map/Map.navigation';
import SettingsScreenNavigator from './screens/Settings/Settings.navigation';

import {active, inactive} from 'app/styles/colors.style';
import {
  FILMS,
  FAVORITES,
  TICKETS,
  MAP,
  SETTINGS,
} from 'app/enum/navigation.enum';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';

const Tab = createBottomTabNavigator();

function FloorMenu({route, ts}) {
  return (
    <Tab.Navigator
      // see documentation:
      // https://reactnavigation.org/docs/bottom-tab-navigator/
      //
      screenOptions={{}}
      tabBarOptions={{
        activeTintColor: active,
        inactiveTintColor: inactive,
        labelStyle: {
          textTransform: 'uppercase',
        },
      }}>
      <Tab.Screen
        name={FILMS}
        component={FilmsScreenNavigator}
        options={{
          tabBarLabel: ts('Films'),
          tabBarIcon: ({focused, color}) => {
            return (
              <MaterialCommunityIcons
                name="filmstrip"
                color={color}
                size={20}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={FAVORITES}
        component={FavoritesScreenNavigator}
        options={{
          tabBarLabel: ts('Favorites'),
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons name="star" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name={TICKETS}
        component={TicketsScreenNavigator}
        options={{
          tabBarLabel: ts('Tickets'),
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons name="ticket" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name={MAP}
        component={MapScreenNavigator}
        options={{
          tabBarLabel: ts('Map'),
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons name="map" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name={SETTINGS}
        component={SettingsScreenNavigator}
        options={{
          tabBarLabel: ts('Settings'),
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons name="tools" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default withTranslation('floorMenu')(FloorMenu);
