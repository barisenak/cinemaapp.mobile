import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import FavoritesScreenNavigator from './screens/Favorites/Favorites.navigation';
import SettingsScreenNavigator from './screens/Settings/Settings.navigation';
import FilmsScreenNavigator from './screens/Films/Films.navigation';
import TicketsScreenNavigator from './screens/Tickets/Tickets.navigation';
import MapScreenNavigator from './screens/Map/Map.navigation';

import {
  FILMS,
  FAVORITES,
  TICKETS,
  MAP,
  SETTINGS,
  FLOOR,
} from 'app/enum/navigation.enum';

import {logAnalyticsEvent} from 'app/utils/analytics.util';

import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

import {getStyle} from './FloorMenu.styles';

const Tab = createBottomTabNavigator();

function FloorMenu({ts, styles}) {
  return (
    <Tab.Navigator
      // see documentation:
      // https://reactnavigation.org/docs/bottom-tab-navigator/
      //
      screenOptions={{}}
      tabBarOptions={{
        activeTintColor: styles.active,
        inactiveTintColor: styles.inactive,
        labelStyle: {
          textTransform: 'uppercase',
        },
        style: {backgroundColor: styles.white},
      }}>
      <Tab.Screen
        name={FILMS}
        component={FilmsScreenNavigator}
        onPress={() => {
          logAnalyticsEvent(FLOOR, FILMS);
        }}
        options={{
          tabBarLabel: ts(FILMS),
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
        onPress={() => {
          logAnalyticsEvent(FLOOR, FAVORITES);
        }}
        options={{
          tabBarLabel: ts(FAVORITES),
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons name="star" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name={TICKETS}
        component={TicketsScreenNavigator}
        onPress={() => {
          logAnalyticsEvent(FLOOR, TICKETS);
        }}
        options={{
          tabBarLabel: ts(TICKETS),
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons name="ticket" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name={MAP}
        component={MapScreenNavigator}
        onPress={() => {
          logAnalyticsEvent(FLOOR, MAP);
        }}
        options={{
          tabBarLabel: ts(MAP),
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons name="map" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name={SETTINGS}
        component={SettingsScreenNavigator}
        onPress={() => {
          logAnalyticsEvent(FLOOR, SETTINGS);
        }}
        options={{
          tabBarLabel: ts(SETTINGS),
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons name="tools" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default withTranslation('floorMenu')(withTheme(getStyle)(FloorMenu));
