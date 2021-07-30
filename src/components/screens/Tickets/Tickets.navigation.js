import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Tickets from './Tickets.connect';

import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

import {getStyle} from '../Tickets/Tickets.styles';

import {TICKETS} from 'app/enum/navigation.enum';

const Stack = createStackNavigator();

function TicketsNavigator({ts, styles}) {
  return (
    <Stack.Navigator initialRouteName={TICKETS}>
      <Stack.Screen
        name={TICKETS}
        component={Tickets}
        options={{
          headerTitle: ts(TICKETS),
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
