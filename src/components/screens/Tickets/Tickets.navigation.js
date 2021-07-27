import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tickets from './Tickets.connect';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {getStyle} from '../Tickets/Tickets.styles';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

const Stack = createStackNavigator();

function TicketsNavigator({ts, styles}) {
  return (
    <Stack.Navigator initialRouteName="Tickets">
      <Stack.Screen
        name="Tickets"
        component={Tickets}
        options={{
          headerTitle: ts('Tickets'),
          headerTitleStyle: {
            color: styles.text.color,
          },

          headerStyle: {backgroundColor: styles.container.backgroundColor},
        }}
      />
    </Stack.Navigator>
  );
}
export default withTranslation('floorMenu')(
  withTheme(getStyle)(TicketsNavigator),
);
