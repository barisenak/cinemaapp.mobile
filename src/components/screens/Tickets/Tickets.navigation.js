import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tickets from './Tickets.connect';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';

const Stack = createStackNavigator();

function TicketsNavigator({ts}) {
  return (
    <Stack.Navigator initialRouteName="Tickets">
      <Stack.Screen
        name="Tickets"
        component={Tickets}
        options={{headerTitle: ts('Tickets')}}
      />
    </Stack.Navigator>
  );
}
export default withTranslation('floorMenu')(TicketsNavigator);
