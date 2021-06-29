import React from 'react';

import Map from './Map.component';
import {createStackNavigator} from '@react-navigation/stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from '../Map/Map.styles';
import {MAP, SEARCH} from 'app/enum/navigation.enum';

const Stack = createStackNavigator();

function MapNavigator({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Map">
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          headerTitle: 'Map',
          headerRight: () => (
            <MaterialCommunityIcons
              name="magnify"
              color="grey"
              size={30}
              style={styles.icon}
              onPress={() => navigation.navigate(SEARCH, {prevScreen: MAP})}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export default MapNavigator;
