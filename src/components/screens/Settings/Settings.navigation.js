import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Settings from './Settings.connect';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';
import {getStyle} from './Settings.styles';

const Stack = createStackNavigator();

function SettingsNavigator({navigation, ts, styles}) {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerTitle: ts('Settings'),
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
  withTheme(getStyle)(SettingsNavigator),
);
