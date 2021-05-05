import React from 'react';
import Films from './Films.component';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function FilmsNavigator({navigation}) {
  return (
    <Stack.Navigator initialRouteName="Films">
      <Stack.Screen
        name="Films"
        component={Films}
        options={{headerTitle: 'Films'}}
      />
    </Stack.Navigator>
  );
}
export default FilmsNavigator;
