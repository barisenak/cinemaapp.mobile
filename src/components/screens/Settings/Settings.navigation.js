import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Settings from './Settings.connect';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';
import {getStyle} from './Settings.styles';
import {LANGUAGE, SETTINGS} from 'app/enum/navigation.enum';
import Language from '../Language/Language.connect';

const Stack = createStackNavigator();

function SettingsNavigator({navigation, ts, styles}) {
  return (
    <Stack.Navigator initialRouteName={SETTINGS}>
      <Stack.Screen
        name={SETTINGS}
        component={Settings}
        options={{
          headerTitle: ts(SETTINGS),
          headerTitleStyle: {
            color: styles.text.color,
          },
          headerStyle: {backgroundColor: styles.container.backgroundColor},
        }}
      />
      <Stack.Screen
        name={LANGUAGE}
        component={Language}
        options={{
          headerTitle: ts(LANGUAGE),
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
