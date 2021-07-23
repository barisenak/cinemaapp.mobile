import React from 'react';

import Map from './Map.connect';
import {createStackNavigator} from '@react-navigation/stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {styles} from '../Map/Map.styles';
import {MAP, SEARCH} from 'app/enum/navigation.enum';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';

const Stack = createStackNavigator();

function MapNavigator({navigation, ts}) {
  return (
    <Stack.Navigator initialRouteName="Map">
      <Stack.Screen
        name="Map"
        component={Map}
        options={{
          headerTitle: ts('Map'),
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
export default withTranslation('floorMenu')(MapNavigator);
