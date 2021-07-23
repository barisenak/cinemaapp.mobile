import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Films from './Films.connect';

import {FILMS, SEARCH} from 'app/enum/navigation.enum';
import {styles} from '../Films/Films.styles';

import analytics from '@react-native-firebase/analytics';
import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';

const Stack = createStackNavigator();

function FilmsNavigator({navigation, ts}) {
  return (
    <Stack.Navigator initialRouteName="Films">
      <Stack.Screen
        name={FILMS}
        component={Films}
        options={{
          headerTitle: ts('Films'),
          headerRight: () => (
            <MaterialCommunityIcons
              name="magnify"
              color="grey"
              size={30}
              style={styles.icon}
              onPress={async () => {
                console.log('jfs');
                await analytics().logEvent('basket', {
                  id: 3745092,
                  item: 'mens grey t-shirt',
                  description: ['round neck', 'long sleeved'],
                  size: 'L',
                });

                navigation.navigate(SEARCH, {prevScreen: FILMS});
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export default withTranslation('floorMenu')(FilmsNavigator);
