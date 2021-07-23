import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Settings from './Settings.connect';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';

const Stack = createStackNavigator();

function SettingsNavigator({navigation, ts}) {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerTitle: ts('Settings')}}
      />
    </Stack.Navigator>
  );
}
export default withTranslation('floorMenu')(SettingsNavigator);
