import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FloorMenu from './src/components/FloorMenu.component';
import store from './src/redux/store';
import Authorization from './src/components/screens/Authorization/Authorization.connect';
import Registration from 'app/components/screens/Registration/Registration.component';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Films">
          <Stack.Screen
            name="Floor"
            component={FloorMenu}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Authorization"
            component={Authorization}
            options={{headerTitle: 'Authorization'}}
          />
          <Stack.Screen
            name="Registration"
            component={Registration}
            options={{headerTitle: 'Registration'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
