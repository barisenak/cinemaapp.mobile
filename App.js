import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FloorMenu from './src/components/FloorMenu.component';
import store from './src/redux/store';
import {AUTHORIZATION, REGISTRATION, FLOOR} from './src/enum/navigation.enum';
import Authorization from './src/components/screens/Authorization/Authorization.connect';
import Registration from './src/components/screens/Registration/Registration.component';

const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Films">
          <Stack.Screen
            name={FLOOR}
            component={FloorMenu}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name={AUTHORIZATION}
            component={Authorization}
            options={{headerTitle: AUTHORIZATION}}
          />
          <Stack.Screen
            name={REGISTRATION}
            component={Registration}
            options={{headerTitle: REGISTRATION}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
