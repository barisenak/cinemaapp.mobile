import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FavoritesScreenNavigator from './screens/Favorites/Favorites.navigation';
import FilmsScreenNavigator from './screens/Films/Films.navigation';
import TicketsScreenNavigator from './screens/Tickets/Tickets.navigation';
import MapScreenNavigator from './screens/Map/Map.navigation';
import SettingsScreenNavigator from './screens/Settings/Settings.navigation';

import {active, inactive} from 'app/styles/colors.style';

const Tab = createBottomTabNavigator();

function FloorMenu({route}) {
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
        name="Films"
        component={FilmsScreenNavigator}
        options={{
          // TODO: move screen names to enum
          tabBarLabel: 'Films',
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
        name="Favorites"
        component={FavoritesScreenNavigator}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons name="star" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Tickets"
        component={TicketsScreenNavigator}
        options={{
          tabBarLabel: 'Tickets',
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons name="ticket" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreenNavigator}
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons name="map" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreenNavigator}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons name="tools" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default FloorMenu;
