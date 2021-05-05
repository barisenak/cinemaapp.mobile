import Map from './Map.component';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

const Stack = createStackNavigator();

function MapNavigator({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Map">
      <Stack.Screen name="Map" component={Map} options={{headerTitle: 'Map'}} />
    </Stack.Navigator>
  );
}
export default MapNavigator;
