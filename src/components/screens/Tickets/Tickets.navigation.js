import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tickets from './Tickets.connect';

const Stack = createStackNavigator();

function TicketsNavigator({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Tickets">
      <Stack.Screen
        name="Tickets"
        component={Tickets}
        options={{headerTitle: 'Tickets'}}
      />
    </Stack.Navigator>
  );
}
export default TicketsNavigator;
