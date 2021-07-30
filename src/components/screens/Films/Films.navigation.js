import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Films from './Films.connect';

import {FILMS, SEARCH} from 'app/enum/navigation.enum';

import {withTranslation} from 'app/providers/LocaleProvider/withTranslation';
import {withTheme} from 'app/providers/ThemeProvider/withTheme';

import {getStyles} from '../Films/Films.styles';

const Stack = createStackNavigator();

function FilmsNavigator({navigation, ts, styles}) {
  return (
    <Stack.Navigator initialRouteName={FILMS}>
      <Stack.Screen
        name={FILMS}
        component={Films}
        options={{
          headerTitle: ts(FILMS),
          headerTitleStyle: {
            color: styles.text.color,
          },
          headerStyle: {backgroundColor: styles.container.backgroundColor},

          headerRight: () => (
            <MaterialCommunityIcons
              name="magnify"
              color="grey"
              size={30}
              style={styles.icon}
              onPress={() => {
                navigation.navigate(SEARCH, {prevScreen: FILMS});
              }}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
export default withTranslation('floorMenu')(
  withTheme(getStyles)(FilmsNavigator),
);
