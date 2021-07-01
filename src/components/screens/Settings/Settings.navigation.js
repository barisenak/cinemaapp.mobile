import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Settings from './Settings.connect';

const Stack = createStackNavigator();

function SettingsNavigator({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerTitle: 'Settings'}}
      />
    </Stack.Navigator>
  );
}
export default SettingsNavigator;
