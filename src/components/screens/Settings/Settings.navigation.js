import Settings from './Settings.component';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

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
