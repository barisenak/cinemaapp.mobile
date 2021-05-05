import Tickets from './Tickets.component';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

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
